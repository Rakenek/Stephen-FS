const passport = require('passport');
let redirectURI;
if (process.env.NODE_ENV === 'production') {
  redirectURI = 'https://emaily-01en.onrender.com/auth/google/callback';
} else redirectURI = '/auth/google/callback';

module.exports = (app) => {
  app.get(
    '/auth/google',
    passport.authenticate('google', {
      scope: ['profile', 'email'],
    })
  );

  app.get(redirectURI, passport.authenticate('google'), (req, res) => {
    res.redirect('/surveys');
  });

  app.get('/api/logout', (req, res) => {
    req.logout();
    res.redirect('/');
  });

  app.get('/api/current_user', (req, res) => {
    res.send(req.user);
  });
};
