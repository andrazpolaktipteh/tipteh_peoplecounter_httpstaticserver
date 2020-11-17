const express = require('express');
const path = require('path');
const app = express();

const PORT_DASHBOARD = process.env.PORT_DASHBOARD || 3005;

const PATH_DASHBOARD = process.env.PATH_DASHBOARD ||  path.join(__dirname, '../static_web_pages/dashboard');

app.use('/',express.static( PATH_DASHBOARD));

app.get('/*', function (req, res) {
    res.sendFile(path.join(PATH_DASHBOARD, 'index.html'));
  });

app.listen(PORT_DASHBOARD, () => console.log(`Server running: path = ${PATH_DASHBOARD}, port = ${PORT_DASHBOARD}`));