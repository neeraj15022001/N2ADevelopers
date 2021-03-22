// jshint esversion:6
const googleButton = document.getElementById("googleButton");
const googleButtonFixed = document.getElementById("googleButtonFixed");
const signOutButton = document.getElementById("signOutButton");
const signOutButtonFixed = document.getElementById("signOutButtonFixed");
const navContainer = document.getElementById("nav-container");

const template = `
<nav class="navbar navbar-expand-lg navbar-dark bg-custom-red p-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="./images/N2A.png" alt="logo" style="height: 3rem"></a>
          <div>
            <button id="navbar-toggler" class="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item" aria-current="page">
                <a href="#" class="nav-link active">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#features">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">Pricing</a>
              </li>
              <li class="nav-item">
                <a href="#faq" class="nav-link">FAQ</a>
              </li>
              <li class="nav-item">
                <a href="#visitor" class="nav-link">Visitors</a>
              </li>
              <li class="nav-item">
                <a href="./projects.html" class="nav-link">Projects</a>
              </li>
              <!-- <li class="nav-item">
                <button class="btn btn-light" id="googleButton"><i class="fa fa-google text-custom-red" aria-hidden="true"></i></button>
              </li>
              <li class="nav-item" id="signOutButtonItem">
                <button class="btn btn-light text-custom-red d-none" id="signOutButton">Sign Out</button>
              </li> -->
          </div>
        </div>
      </nav>

      <!-- Fixed Nav -->
      <nav class="navbar navbar-expand-lg navbar-light p-3 fixed-nav" id="fixed-nav">
        <div class="container-fluid">
          <a class="navbar-brand" href="#"><img src="./images/N2ABlack.png" alt="logo" style="height: 3rem;"></a>
          <div>
            <button id="navbar-toggler-fixed" class="navbar-toggler ms-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContentFixed" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarSupportedContentFixed">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <li class="nav-item" aria-current="page">
                  <a href="#" class="nav-link active" >Home</a>
                </li>
                <a class="nav-link" href="#features">Features</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#pricing">Pricing</a>
              </li>
              <li class="nav-item">
                <a href="#faq" class="nav-link">FAQ</a>
              </li>
              <li class="nav-item">
                <a href="#visitor" class="nav-link">Visitors</a>
              </li>
              <li class="nav-item">
                <a href="./projects.html" class="nav-link">Projects</a>
              </li>
              <!-- <li class="nav-item">
                <button class="btn btn-danger" id="googleButtonFixed"><i class="fa fa-google text-light" aria-hidden="true"></i></button>
              </li>
              <li class="nav-item" id="signOutButtonItemFixed">
                <button class="btn btn-danger text-light d-none" id="signOutButtonFixed">Sign Out</button>
              </li> -->
          </div>
        </div>
      </nav>
`;
navContainer.innerHTML = template;
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
