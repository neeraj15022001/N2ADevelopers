const express = require("express");
var app = express();

var admin = require("firebase-admin");

var serviceAccount = require("./service_account.json");
var cookieParser = require("cookie-parser");

app.use(cookieParser());
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(__dirname + "/static"));
const PORT = process.env.PORT || 3000;

// app.all("*", (req, res, next) => {
//   console.log("Checking all route");
//   next();
// });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/static/index.html");
});

// Whenever a user is accessing restricted content that requires authentication.
// app.get("/profile", (req, res) => {
//   const sessionCookie = req.cookies.session || "";
//   // console.log(`sessionCookie = ${sessionCookie}`)
  
//   admin
//     .auth()
//     .verifySessionCookie(sessionCookie, true /** checkRevoked */)
//     .then(() => {
//       console.log("session verified")
//     })
//     .catch((error) => {
//       res.redirect("/");
//       // res.send(error)
//       // console.log(error)
//     });
// });

// app.get("/profile", (req, res) => {
//   res.send("profile")
// })

app.post("/sessionLogin", (req, res) => {
  const idToken = req.body.idToken.toString();
  // console.log(`idtoken from  Node Server = ${idToken}`);
  createSession(req, res, idToken);
});

app.get("/sessionLogout", (req, res) => {
  res.clearCookie("session");
  console.log("Signed Out Successfully, Redirecting to Home Route");
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(
    "App is now running on PORT 3000. Click Below to go there\n http://localhost:3000"
  );
});

const verifySession = (req, res, idToken) => {
  console.log("Starting to Verify User Session");
  admin
    .auth()
    .verifyIdToken(idToken)
    .then((decodedIdToken) => {
      console.log("Verifying User Session");
      // Only process if the user just signed in in the last 5 minutes.
      if (new Date().getTime() / 1000 - decodedIdToken.auth_time < 5 * 60) {
        // Create session cookie and set it.
        return;
      }
      // A user that was not recently signed in is trying to set a session cookie.
      // To guard against ID token theft, require re-authentication.
      res.status(401).send("Recent sign in required!");
    });
};

const createSession = (req, res, idToken) => {
  console.log("Starting to create User Session");
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  admin
    .auth()
    .createSessionCookie(idToken, { expiresIn })
    .then((sessionCookie) => {
      console.log("Creating User Session ......");
      // Set cookie policy for session cookie.
      const options = { maxAge: expiresIn, httpOnly: true, secure: true };
      res.cookie("session", sessionCookie, options);
      res.end(JSON.stringify({ status: "success" }));
    })
    .catch((error) => {
      console.log(error)
    });
};
