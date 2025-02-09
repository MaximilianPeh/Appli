from flask import Flask, request, jsonify
from recommendations import get_recommendations
from autotagging import get_autotag
from recommendations import get_recommendations
from autotagging import get_autotag

app = Flask(__name__)


import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("appli-b7af4-firebase-adminsdk-fbsvc-56b516817b.json")
firebase_admin.initialize_app(cred)

db = firestore.client()

@app.route('/recommendations', methods=['POST']) # post means send data to api; get means you get data from firebase
def recommendations():
    data = request.json
    user_id = data.get('user_id')
    recommendations = get_recommendations(user_id)
    return jsonify(recommendations)

@app.route('/autotag', methods=['POST'])
def autotag():
    data = request.json
    image_path = data.get('image_path')
    autotag = get_autotag(image_path)
    return jsonify(autotag)


@app.route('/health', methods=['GET'])
def health():
    return jsonify({"status": "i am good"})

# GREET
@app.route('/greet/<name>', methods=['GET'])
def greet(name):
    return jsonify({"status": f"i, {name} am good"})

@app.route('/put_offer', methods=['POST'])
def put_offer():
    data = request.json
    print(data)
    doc_ref = db.collection("offers").document()
    doc_ref.set(data)
    return jsonify({"status": f"i put your name: {data}"})

@app.route('/get_all_offers', methods=['GET'])
def get_offers():
    docs = db.collection("offers").get()
    return jsonify([doc.to_dict() for doc in docs])

if __name__ == '__main__':
    app.run(debug=True, port=5001)
