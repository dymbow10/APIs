from flask import Flask, jsonify, request

app = Flask(__name__)

livros = [
    {
        'id': 1,
        'titulo': 'Metamorfose',
        'autor': 'Kafka'
    },
    {
        'id': 2,
        'titulo': 'Biblia',
        'autor': 'Jesus'
    },
    {
        'id': 3,
        'titulo': '100 crimes de guerra para cometer antes de morrer',
        'autor': 'Sales'
    }
]

#consultar todos
@app.route('/livros',methods=['GET'])
def obter_all():
    return jsonify(livros)

#consultar id
@app.route('/livros/<int:id>',methods=['GET'])
def obter_um(id):
    for livro in livros:
        if livro.get('id') == id:
            return jsonify(livro)

#editar
@app.route('/livros/<int:id>',methods=['PUT'])
def edita(id):
    alterado = request.get_json()
    for indice,livro in enumerate(livros):
        if livro.get('id') == id:
            livros[indice].update(alterado)
            return jsonify(livros[indice])

#criar
@app.route('/livros/<int:id>', methods=['POST'])
def cria(id):
    novo = request.get_json()
    for livro in livros:
        if livro.get('id') == id:
            return jsonify("Livro já existe")
    livros.append(novo)
    return jsonify(livros)

#excluir
@app.route('/livros/<int:id>',methods = ['DELETE'])
def exclui(id):
    for indice,livro in enumerate(livros):
        if livro.get("id") == id:
            del livros[indice]
            return jsonify(livros)
    return jsonify("Livro não encontrado")

app.run(port=8080,host='localhost',debug=True)