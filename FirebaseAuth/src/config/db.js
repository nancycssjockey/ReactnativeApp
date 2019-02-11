import Firebase from 'firebase';

//add your configuration here
 let config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
let app = Firebase.initializeApp(config);

export const db = app.database();