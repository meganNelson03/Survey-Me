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
}, async function(accessToken, refreshToken, profile, cb) {
   
    var user = await User.findOne({googleId: profile.id});

    if (user) {
      return cb(null, user);
    } 
    var newUser = await new User({googleId: profile.id, credits: 0}).save();
    cb(null, newUser);
    
}));