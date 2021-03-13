// jshint esversion:6

const express = require("express");
var cookieParser = require("cookie-parser");
// var csrf = require("csurf");

// setup route middlewares
// var csrfProtection = csrf({ cookie: true });

// create express app
const PORT = process.env.port || 3000;
var app = express();

// Firebase
var admin = require("firebase-admin");
var serviceAccount = require("./n2adevelopers-firebase-adminsdk-s1vt7-b891244c72.json");

app.use(express.static(__dirname + "/static"));
app.use(cookieParser());
// app.use(csrfProtection);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize Firebase
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// app.all("*", (req, res, next) => {
    // console.log("Neeraj here");
//   console.log(req);
//   res.cookie("XSRF-TOKEN", req.csrfToken());
//   next();
// });

// PRICING ROUTE
// app.get("/pricing", (req, res) => {
//     console.log("Neeraj in pricing section");
//   const sessionCookie = req.cookies.session || "";

//   admin
//     .auth()
//     .verifySessionCookie(sessionCookie, true /** checkRevoked */)
//     .then(() => {
//       res.render("profile.html");
//     })
//     .catch((error) => {
//       res.redirect("/login");
//     });
//   res.send("Pricing section");
// });


// Rating a freelancer
app.get("/rateAFreelancer", (req, res) => {
  res.send("Rate a Freelancer");
});

// Google Auth
// app.get("/sessionLogin", (req, res) => {
//   console.log("in session login");
//   const idToken = req.body.idToken.toString();
//   console.log(idToken);
//   const expiresIn = 60 * 60 * 24 * 5 * 1000;

//   admin
//     .auth()
//     .createSessionCookie(idToken, { expiresIn })
//     .then(
//       (sessionCookie) => {
//         const options = { maxAge: expiresIn, httpOnly: true };
//         res.cookie("session", sessionCookie, options);
//         res.end(JSON.stringify({ status: "success" }));
//       },
//       (error) => {
//         res.status(401).send("UNAUTHORIZED REQUEST!");
//       }
//     );
// res.send("in session login section");
// });

app.post('/sessionLogin', (req, res) => {
  // Get the ID token passed and the CSRF token.
  const idToken = req.body.token.toString();
  // const csrfToken = idToken
  // console.log(`idToken = ${idToken}   csrfToken = ${csrfToken}`)
  // Guard against CSRF attacks.
  // if (csrfToken !== idToken) {
  //   res.status(401).send('UNAUTHORIZED REQUEST!');
  //   return;
  // }
  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  // Create the session cookie. This will also verify the ID token in the process.
  // The session cookie will have the same claims as the ID token.
  // To only allow session cookie setting on recent sign-in, auth_time in ID token
  // can be checked to ensure user was recently signed in before creating a session cookie.
  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then(
      (sessionCookie) => {
        // Set cookie policy for session cookie.
        // const options = { maxAge: expiresIn, httpOnly: true, secure: true };
        // res.cookie('session', sessionCookie, options);
        res.end(JSON.stringify({ status: 'success' }));
      },
      (error) => {
        res.status(401).send('UNAUTHORIZED REQUEST!');
      }
    );
});


// Logout
app.get("/sessionLogout", (req, res) => {
    console.log("Neeraj in session Logout section");
  res.clearCookie("session");
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`App runnning on port ${PORT}`);
});
