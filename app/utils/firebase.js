import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyAcyG0dT9b5ppJlqkR3ywnt7ZrBZrYXn4U",
    authDomain: "energycontroltest.firebaseapp.com",
    databaseURL: "https://energycontroltest.firebaseio.com",
    projectId: "energycontroltest",
    storageBucket: "",
    messagingSenderId: "473816751775",
};

let app = Firebase.initializeApp(config);
export const db = app.database();