// jshint esversion:6
const googleButton = document.getElementById("googleButton");
const googleButtonFixed = document.getElementById("googleButtonFixed");
const signOutButton = document.getElementById("signOutButton");
const signOutButtonFixed = document.getElementById("signOutButtonFixed");

// let value_or_null = Cookies.get();
// console.log(`Cookie value is ${Object.values(value_or_null)}`)

// if (localStorage.getItem("email") != null) {
//   googleButton.classList.add("d-none");
//   signOutButton.classList.remove("d-none");
//   googleButtonFixed.classList.add("d-none");
//   signOutButtonFixed.classList.remove("d-none");
// } else {
//   googleButton.classList.remove("d-none");
//   signOutButton.classList.add("d-none");
//   googleButtonFixed.classList.remove("d-none");
//   signOutButtonFixed.classList.add("d-none");
// }
// var firebaseConfig = {
//   apiKey: "AIzaSyBwH4XL_cwjrMIE1KNZAgAyXfDiHuenIbI",
//   authDomain: "n2adevelopers.firebaseapp.com",
//   projectId: "n2adevelopers",
//   storageBucket: "n2adevelopers.appspot.com",
//   messagingSenderId: "159122432683",
//   appId: "1:159122432683:web:8c29b9214b30e2a8fb0dee",
// };
// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);

// var provider = new firebase.auth.GoogleAuthProvider();


// // FIREBASE METHODS
// const googleSignIn = () => {
//   firebase
//     .auth()
//     .signInWithPopup(provider)
//     .then((result) => {
//       var credential = result.credential;

//       // This gives you a Google Access Token. You can use it to access the Google API.
//       var token = credential.accessToken;
//       // The signed-in user info.
//       var user = result.user;
//       console.log(`credential = ${credential}`);
//       console.log(`token = ${token}`);
//       console.log(`user = ${user}`);
//       googleButton.classList.add("d-none");
//       signOutButton.classList.remove("d-none");
//       googleButtonFixed.classList.add("d-none");
//       signOutButtonFixed.classList.remove("d-none");
//       firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);
//       getIdToken(user.displayName, user.email);
//     })
//     .catch((error) => {
//       // Handle Errors here.
//       var errorCode = error.code;
//       var errorMessage = error.message;
//       // The email of the user's account used.
//       var email = error.email;
//       // The firebase.auth.AuthCredential type that was used.
//       var credential = error.credential;
//       console.log(`errorCode = ${errorCode}`);
//       console.log(`errorMessage = ${errorMessage}`);
//       console.log(`email = ${email}`);
//       console.log(`credential = ${credential}`);
//       // ...
//     });
// };

// const googleSignOut = () => {
//   localStorage.removeItem("displayName");
//   localStorage.removeItem("email");
//   firebase
//     .auth()
//     .signOut()
//     .then(() => {
//       console.log("Signed Out Successfully");
//       googleButton.classList.remove("d-none");
//       signOutButton.classList.add("d-none");
//       googleButtonFixed.classList.remove("d-none");
//       signOutButtonFixed.classList.add("d-none");
//     })
//     .catch((error) => {
//       console.log(`error while signing out = ${error}`);
//     });
//   fetch("/sessionLogout");
// };

// const getIdToken = (displayName, email) => {
//   localStorage.setItem("displayName", displayName);
//   localStorage.setItem("email", email);
//   firebase
//     .auth()
//     .currentUser.getIdToken(/* forceRefresh */ true)
//     .then(function (idToken) {
//       // Send token to your backend via HTTPS
//       console.log(`Current User Token  = ${idToken}`);
//       // PErforming fetch request
//       fetch("/sessionLogin", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({ idToken: idToken }),
//       })
//         .then(() => console.log("fetch API successfull"))
//         .catch((error) => console.log(error));
//       // ...
//     })
//     .catch(function (error) {
//       // Handle error
//       console.log(error);
//     });
// };

// // EVENT LISTENERS
// googleButton.addEventListener("click", () => {
//   googleSignIn();
// });

// signOutButton.addEventListener("click", () => {
//   googleSignOut();
// });
// googleButtonFixed.addEventListener("click", () => {
//   googleSignIn();
// });

// signOutButtonFixed.addEventListener("click", () => {
//   googleSignOut();
// });

// FIXED NAVBAR METHODS
const navbarFixed = document.getElementById("fixed-nav");
const navbarToggler = document.getElementById("navbar-toggler");
const navbarTogglerFixed = document.getElementById("navbar-toggler-fixed");
const navbarSupportedContent = document.getElementById(
  "navbarSupportedContent"
);
const navbarSupportedContentFixed = document.getElementById(
  "navbarSupportedContentFixed"
);

var scrollObject = {};
window.onscroll = getScrollPosition;

function getScrollPosition() {
  scrollObject = {
    x: window.pageXOffset,
    y: window.pageYOffset,
  };
  // If you want to check distance
  if (scrollObject.y > 200) {
    // add class
    navbarFixed.style.top = "0";
    if (navbarSupportedContent.classList.contains("show")) {
      navbarToggler.classList.add("collapsed");
      navbarSupportedContent.classList.remove("show");
    }
  } else {
    // remove class
    if (navbarSupportedContentFixed.classList.contains("show")) {
      navbarTogglerFixed.classList.add("collapsed");
      navbarSupportedContentFixed.classList.remove("show");
    }
    navbarFixed.style.top = "-6rem";
  }
}
