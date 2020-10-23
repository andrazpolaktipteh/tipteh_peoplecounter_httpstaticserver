const express = require('express');
const path = require('path');
const app_main = express();
const app_dashboard = express();
const PORT_DISPLAY = process.env.PORT_DISPLAY || 3004;
const PORT_DASHBOARD = process.env.PORT_DASHBOARD || 3005;

const PATH_DISPLAY = process.env.PATH_DISPLAY || '../tipteh_people_counter_v2/build';
const PATH_DASHBOARD = process.env.PATH_DASHBOARD || '../tipteh_peoplecounter_frotend_statistic/build';

app_main.use('/',express.static(path.normalize(PATH_DISPLAY)));
app_dashboard.use('/',express.static( PATH_DASHBOARD));

app_main.listen(PORT_DISPLAY, () => console.log(`Server running: path = ${PATH_DISPLAY}, port = ${PORT_DISPLAY}`));
app_dashboard.listen(PORT_DASHBOARD, () => console.log(`Server running: path = ${PATH_DASHBOARD}, port = ${PORT_DASHBOARD}`));

