import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';  // Change back to direct import

const firebaseConfig = {
  apiKey: 'AIzaSyA3Pk4mjEXm3w5nKe0UpJpt1BkI-yeKx8w',
  projectId: 'applibackend',
  storageBucket: 'applibackend.firebasestorage.app',
  databaseURL: 'https://applibackend-default-rtdb.firebaseio.com/',
  messagingSenderId: '1071675452158',
  appId: '1:1071675452158:ios:d2685ab3cc2402a08013af',
};

firebase.initializeApp(firebaseConfig);

export { firebase };
export { database };  // Export database directly from the package
