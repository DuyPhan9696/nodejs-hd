import express from 'express';
import configViewEngine from './configs/viewEngine';
import initWebRoute from './route/web';
import iniAPIRoute from './route/api';
import connection from './configs/conectDB'

require('dotenv').config();
const app = express();
const port = process.env.PORT || 4000;


const http = require('http');
const server = http.createServer(app)
const io = require('socket.io')(server)

const delay = require('delay')

io.on('connection', (socket) => {
    console.log('user connetion')
})
app.get('/', (req, res) => {
    console.log('duy')
})
configViewEngine(app);
initWebRoute(app);
iniAPIRoute(app);

server.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

// async function number() {
//     while (true) {
//         const randomNumber = Math.random() * 2;
//         let data = ApiController.getAllLocation
//         console.log(JSON.stringify.data)
//         io.emit('number', 1)
//         await delay(5000)
//     }
// }
// number()