import firebase from 'firebase';
import Login from './src/Login'
import Chat from './src/Chat'
import global from './globals'

class Fire {
    constructor() {
        this.init();
        //this.observeAuth();
    }

    observeAuth = () =>
        firebase.auth().onAuthStateChanged(this.onAuthStateChanged);

    onAuthStateChanged = user => {
        if (!user) {
            try {
                firebase.auth().signInWithEmailAndPassword(global.email, global.pass)
            } catch ({ message }) {
                alert(message);
            }
        } else {
                firebase.auth().signInWithEmailAndPassword(global.email, global.pass)
        }
    };

    giveData(email, pass) {
        global.email = email;
        global.pass = pass;
    }

    get ref() {
        return firebase.database().ref('messages');
    }

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    }

    off() {
        this.ref.off();
        firebase.auth().signOut();
    }

    get uid() {

        return (firebase.auth().currentUser || {}).uid;
    }

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }

    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);


    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyDoQjKFPx659pHREwUTA4uuH3dwwkgleyg",
            authDomain: "lab3-d6655.firebaseapp.com",
            databaseURL: "https://lab3-d6655.firebaseio.com",
            projectId: "lab3-d6655",
            storageBucket: "lab3-d6655.appspot.com",
            messagingSenderId: "757053124778",
        });


}
Fire.shared = new Fire();
export default Fire;