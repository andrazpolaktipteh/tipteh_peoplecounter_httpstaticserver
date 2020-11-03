const express = require('express');
const path = require('path');
const app_main = express();
const app_dashboard = express();

const PORT_DASHBOARD = process.env.PORT_DASHBOARD || 3005;

const PATH_DASHBOARD = process.env.PATH_DASHBOARD || '../tipteh_peoplecounter_frotend_statistic/build';

app_dashboard.use('/',express.static( PATH_DASHBOARD));

app_dashboard.listen(PORT_DASHBOARD, () => console.log(`Server running: path = ${PATH_DASHBOARD}, port = ${PORT_DASHBOARD}`));