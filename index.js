const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();  //generate an object of express

//create a route handler, root route
/*app.get('/',(req, res)=>{
  res.send({ bye: 'buddy'});
});
*/

//authenticate user with GoogleStrategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: '/auth/google/callback'
    },
    (accessToken, refreshToken, profile, done) => {
      console.log('access token: ', accessToken);
      console.log('refresh token', refreshToken);
      console.log('profile', profile);
    }
  )
);
//register passport as google strategy
app.get(
  '/auth/google',
  passport.authenticate('google',{
    scope: ['profile','email']
  })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google')
);

const PORT = process.env.PORT || 5000;

app.listen(PORT);
//localhost:5000
