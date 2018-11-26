import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyCCyrw8oj9Qc9dKSx3QXDzhH0frVrIzm9U",
    authDomain: "mychatappfirebase-df627.firebaseapp.com",
    databaseURL: "https://mychatappfirebase-df627.firebaseio.com",
    projectId: "mychatappfirebase-df627",
    storageBucket: "mychatappfirebase-df627.appspot.com",
    messagingSenderId: "1093587579627",
  };

  const fire = firebase.initializeApp(config);
  export default fire;
