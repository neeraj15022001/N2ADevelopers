// jshint esversion:6

var firebaseConfig = {
  apiKey: "AIzaSyBwH4XL_cwjrMIE1KNZAgAyXfDiHuenIbI",
  authDomain: "n2adevelopers.firebaseapp.com",
  projectId: "n2adevelopers",
  storageBucket: "n2adevelopers.appspot.com",
  messagingSenderId: "159122432683",
  appId: "1:159122432683:web:8c29b9214b30e2a8fb0dee",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var provider = new firebase.auth.GoogleAuthProvider();
const googleButton = document.getElementById("googleButton");
const signOutButton = document.getElementById("signOutButton");
const googleSignIn = () => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => {
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(`credential = ${credential}`);
      console.log(`token = ${token}`);
      console.log(`user = ${user}`);
      googleButton.classList.add("d-none");
      signOutButton.classList.remove("d-none");
      firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
    //   const csrfToken = getCookie("CSRF-TOKEN");

    //   const headers = new Headers({
    //     "Content-Type": "application/json",
    //     "X-CSRF-TOKEN": "Neeraj",
    //   });
      fetch("/sessionLogin", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        //   "CSRF-Token": token,
        },
        body: JSON.stringify({ token}),
      });
    })
    .catch((error) => {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      console.log(`errorCode = ${errorCode}`);
      console.log(`errorMessage = ${errorMessage}`);
      console.log(`email = ${email}`);
      console.log(`credential = ${credential}`);
      // ...
    });
};

const googleSignOut = () => {
  firebase
    .auth()
    .signOut()
    .then(() => {
      console.log("Signed Out Successfully");
      googleButton.classList.remove("d-none");
      signOutButton.classList.add("d-none");
    })
    .catch((error) => {
      console.log(`error while signing out = ${error}`);
    });
};

googleButton.addEventListener("click", () => {
  googleSignIn();
});

signOutButton.addEventListener("click", () => {
  googleSignOut();
});

// var provider = new firebase.auth.GoogleAuthProvider();
//     provider.addScope('profile');
//     provider.addScope('email');
//     firebase.auth().signInWithPopup(provider).then(function(result) {
//      // This gives you a Google Access Token.
//      var token = result.credential.accessToken;
//      // The signed-in user info.
//      var user = result.user;
//     //  console.log(token)

//     //  Fetch Request
//     fetch("/sessionLogin", {
//         method: "POST",
//         headers: {
//             Accept: 'application/json',
//             "Content-Type": "application/json",
//             "CSRF-Token": token,
//         },
//         body: JSON.stringify({token}),
//     })
//     .then(() => {
//         console.log("in first promise")
//     })
//     .then(() => {
//         console.log('in second promise')
//     });
//     return false;
//     })
//     .catch((error) => {
//         console.log(error);
//     })
