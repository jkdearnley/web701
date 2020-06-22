import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyB8jvXH_hihtt1DjdTsY4h3aiRO_QF5N6w",
  authDomain: "web701-eggcellent.firebaseapp.com",
  databaseURL: "https://web701-eggcellent.firebaseio.com",
  projectId: "web701-eggcellent",
  storageBucket: "web701-eggcellent.appspot.com",
  messagingSenderId: "101664882857",
  appId: "1:101664882857:web:3c9c0ed83efe0dbf2ea9b8"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export function firebaseListener(func) {
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      // console.log("User log in success", user);
      func(true, user)
    } else {
      // console.log("User log in failed", user);
      func(false)
    }
  }, function(error) {
    console.log(error)
  });
}

export const ref = firebase.database().ref();
export const firebaseAuth = firebase.auth;
