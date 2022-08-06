const passport = require('passport');

module.exports = app => {

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

};
