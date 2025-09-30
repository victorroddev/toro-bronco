from flask import Flask, render_template, request
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart 
import base64
import os

app = Flask(__name__)

TURNSTILE_SECRET_KEY = os.environ.get('TURNSTILE_SECRET_KEY')
TEST_KEY = ""
MAIL_PASSWORD = os.environ.get('MAIL_PASSWORD')


#Supported Languages
SUPPORTED_LANGUAGES = ['en', 'es']
DEFAULT_LANGUAGE = 'es'

def get_user_language():
    accept_languages = request.accept_languages.best_match(SUPPORTED_LANGUAGES)
    if accept_languages:
        return accept_languages
    return DEFAULT_LANGUAGE

@app.route("/")
def home():
    lang = get_user_language()
    return render_template(f'{lang}/home.html')

@app.route("/menu")
def menu():
    lang = get_user_language()
    return render_template(f'{lang}/menu.html')

@app.route("/ubicacion")
def ubicacion():
    return render_template('ubicacion.html')

@app.route('/presite')
def presite():
    return render_template('presite.html')


@app.route('/especialidades')
def especialidades():
    lang = get_user_language()
    return render_template(f'{lang}/menu/especialidades.html')

@app.route('/postres')
def postres():
    lang = get_user_language()
    return render_template(f'{lang}/menu/postres.html')

@app.route('/mixologia')
def mixologia():
    lang = get_user_language()
    return render_template(f'{lang}/menu/mixologia.html')

@app.route('/ninos')
def ninos():
    lang = get_user_language()
    return render_template(f'{lang}/menu/ninos.html')

@app.route('/mariscos')
def mariscos():
    lang = get_user_language()
    return render_template(f'{lang}/menu/mariscos.html')


@app.route('/cortes')
def cortes():
    lang = get_user_language()
    return render_template(f'{lang}/menu/cortes.html')    

@app.route('/comaleros')
def comaleros():
    lang = get_user_language()
    return render_template(f'{lang}/menu/comaleros.html')

@app.route('/entradas')
def entradas():
    lang = get_user_language()
    return render_template(f'{lang}/menu/entradas.html')

@app.route('/tacos')
def tacos():
    lang = get_user_language()
    return render_template(f'{lang}/menu/tacos.html')

@app.route('/tests')
def tests():
    lang = get_user_language()
    return render_template(f'{lang}/tests.html')


@app.route('/contacto', methods=['GET','POST'])
def email():
    """Function that that manages the contact form
    """
    if request.method == 'POST':
        token = request.form.get('cf-turnstile-response')
        if not token:
            return "error, Turnstile, token not found", 400
        
        payload = {
            'secret': TEST_KEY,
            'response': token,
            'remoteip': request.remote_addr
        }

        response = request.post('', data=payload)
        result = response.json

        if result.get('sucess'):
            encoded_password = os.environ.get('MAIL_PASSWORD')
            password = base64.b64code(encoded_password).decode()

            subject = "Mensaje en Toro bronco Real" 
            name = request.form["name"]
            email = request.form["email"]
            phone = request.form["phone"]
            msg = request.form["msg"]

            server = smtplib.SMTP('smtp.gmail.com', 587)
            server.starttls()
            server.login("growy.noti@gmail.com", password )

            message  = MIMEText(f"subject: {subject}\n\nName: {name}\nEmail: {email}\nPhone: {phone}\nMessage: {msg}")

            message["from"] = "growy.noti@gmail.com"
            message["to"] = "bernalrefugio24@gmail.com"
            message["subject"] = subject

            server.sendmail("growy.noti@gmail.com", "bernalrefugio24@gmail.com", message.as_string())

            server.quit()

        return render_template('home.html')
    else:
        return "Error, turnstile failed"


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5500)

