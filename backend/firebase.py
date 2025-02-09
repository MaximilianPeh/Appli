import firebase_admin
from firebase_admin import credentials
from firebase_admin import firestore

cred = credentials.Certificate("appli-b7af4-firebase-adminsdk-fbsvc-56b516817b.json")
firebase_admin.initialize_app(cred)

db = firestore.client()
doc_ref = db.collection("offers").document("1")
print(doc_ref.get().to_dict())
