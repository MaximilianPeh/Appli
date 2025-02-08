from flask import Flask, request, jsonify

app = Flask(__name__)


# @app.route('/recommendations', methods=['POST']) # post means send data to api; get means you get data from firebase
# def recommendations():
#     data = request.json
#     user_id = data.get('user_id')
#     recommendations = get_recommendations(user_id)
#     return jsonify(recommendations)



@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "i am good"})

@app.route('/greet/<name>', methods=['GET'])
def greet(name):
    return jsonify({"status": f"i, {name} am good"})


@app.route('/test_post', methods=['POST'])
def test_post():
    data = request.json
    return jsonify({"status": f"i got your data: {data}"})




if __name__ == '__main__':
    app.run(debug=True)