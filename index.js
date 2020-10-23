const express = require('express');
const app = express();
const PORT = 3000;

//app.use('/',express.static('../front_end_testpages'));
app.use('/',express.static('../front_end'));

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));