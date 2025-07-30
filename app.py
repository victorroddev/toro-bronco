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
    return render_template('menu.html')

@app.route("/ubicacion")
def ubicacion():
    return render_template('ubicacion.html')

@app.route('/presite')
def presite():
    return render_template('presite.html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=True, port=5500)