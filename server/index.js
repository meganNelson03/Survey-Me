const express = require("express");
const mongoose = require("mongoose");
const passport = require("passport");
const bodyparser = require("body-parser");
const cookiesession = require("cookie-session");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const app = express();

const keys = require("./config/keys");
require("./models/User.js");
require("./services/passport/passport");

//....APP CONFIG.....
app.use(express.static(__dirname + "/services"));
app.use(bodyparser.json());


//....MONGODB CONFIG....
mongoose.connect(keys.MONGODB_URI, (err, connection) => {
    if (err) throw err;
    console.log("Connection successful.")
});

//...PASSPORT CONFIG....
app.use(cookiesession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.COOKIE_KEY]
}));
app.use(passport.initialize());
app.use(passport.session())

app.get("/", (req, res) => {
    res.send({
        hi: "bye"
    });
})

//....ROUTES.....
require("./routes/auth")(app);
require("./routes/billing")(app);

PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Listening on ${PORT}...`);
})