import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import iniAPIRoute from './route/api';
import connection from './configs/conectDB'

require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;

configViewEngine(app);
initWebRoute(app);
iniAPIRoute(app);


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})