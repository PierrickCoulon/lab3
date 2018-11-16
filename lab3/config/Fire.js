import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyDoQjKFPx659pHREwUTA4uuH3dwwkgleyg",
    authDomain: "lab3-d6655.firebaseapp.com",
    databaseURL: "https://lab3-d6655.firebaseio.com",
    projectId: "lab3-d6655",
    storageBucket: "lab3-d6655.appspot.com",
    messagingSenderId: "757053124778"
  };

  const fire = firebase.initializeApp(config);
  export default fire;