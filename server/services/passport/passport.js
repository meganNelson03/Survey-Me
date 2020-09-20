var passport = require("passport");
const keys = require("../../config/keys");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../../models/User.js");

// Take User and transform it into corresponding cookie id
passport.serializeUser((user, done) => {
    done(null, user.id);
});

// Take cookie and transform it into corresponding User Object
passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => {
        done(null, user);
    });
});

passport.use(new GoogleStrategy({
    clientID: keys.GOOGLE_CLIENT_ID,
    clientSecret: keys.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback",
    proxy: true
}, function(accessToken, refreshToken, profile, cb) {
    User.findOne({googleId: profile.id}, (err, user) => {
        if (err) {
            console.log("Error finding user: " + err);
        } else {
            if (user) {
                // user exists
                console.log(user);
                cb(null, user);
            } else {
                // user needs to be created
                User.create({googleId: profile.id}, (err, newUser) => {
                    if (err) {
                        console.log("Error creating user: " + err);
                    } else {
                        console.log("created new user");
                        console.log(user);
                        cb(null, newUser);
                    }
                })
            }
        }
    })
}));