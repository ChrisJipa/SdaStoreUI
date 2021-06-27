//Redirect all traffic from http to https
function requireHTTPS(req, res, next) {
  //The 'X-forwarded proto' check is for Heroku
  if (!req.secure && req.get('X-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

const express = require('express');
//const path = require('path');
const app = express();
app.use(requireHTTPS);

// Serve only the static files form the dist directory
app.use(express.static('./dist/sda-store-ui'));

app.get('/*', function (req, res, next) {
    res.sendFile('index.html', {root: 'dist/sda-store-ui/'});
  }
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
