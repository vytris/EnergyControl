import Firebase from 'firebase';

let config = {
    apiKey: "AIzaSyBTv86zHeFtWNWKfsFjTdtx94s_43Mc3Xs",
    authDomain: "energycontrol-77b8b.firebaseapp.com",
    databaseURL: "https://energycontrol-77b8b.firebaseio.com",
    projectId: "energycontrol-77b8b",
    storageBucket: "",
    messagingSenderId: "193020136648",
};

let app = Firebase.initializeApp(config);
export const db = app.database();