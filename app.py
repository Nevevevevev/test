from flask import Flask, request, jsonify, render_template

app = Flask(__name__)

# Serve HTML page
@app.route('/')
def index():
    return render_template('index.html')

# Example function that JS can call
@app.route('/add', methods=['POST'])
def add():
    data = request.json
    result = data['a'] + data['b']
    return jsonify({'result': result})

if __name__ == '__main__':
    app.run(debug=True)
