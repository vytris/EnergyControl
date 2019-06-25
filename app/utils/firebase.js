import firebase from 'firebase';

const prodConfig = {
    apiKey: "AIzaSyBTv86zHeFtWNWKfsFjTdtx94s_43Mc3Xs",
    authDomain: "energycontrol-77b8b.firebaseapp.com",
    databaseURL: "https://energycontrol-77b8b.firebaseio.com",
    projectId: "energycontrol-77b8b",
    storageBucket: "",
    messagingSenderId: "193020136648",
    appId: "1:193020136648:web:f6e2fb39c4e56f8a"
};

const devConfig = {
    apiKey: "AIzaSyBTv86zHeFtWNWKfsFjTdtx94s_43Mc3Xs",
    authDomain: "energycontrol-77b8b.firebaseapp.com",
    databaseURL: "https://energycontrol-77b8b.firebaseio.com",
    projectId: "energycontrol-77b8b",
    storageBucket: "",
    messagingSenderId: "193020136648",
    appId: "1:193020136648:web:f6e2fb39c4e56f8a"
};

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

export const firebaseImpl = firebase.initializeApp(config);
export const firebaseDatabase = firebase.database();
export const firebaseAuth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const facebookProvider = new firebase.auth.FacebookAuthProvider();