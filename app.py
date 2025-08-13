from flask import Flask, render_template, request

app = Flask(__name__)

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


if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5500)