import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


 var config = {
    apiKey: "AIzaSyABDqvy2zuufC66IkJfUQkpI97X4tGlFvc",
    authDomain: "react-chegeapplication.firebaseapp.com",
    projectId: "react-chegeapplication",
    storageBucket: "react-chegeapplication.appspot.com",
    messagingSenderId: "566002152503",
    appId: "1:566002152503:web:292597d2329d7beedc7bb2",
    measurementId: "G-ZVLF6WYFT4"
    
  };
  // Initialize Firebase
firebase.initializeApp(config);
//const analytics = getAnalytics(app);

firebase.firestore().settings({ timestampsInSnapshots: true });

 export default firebase;