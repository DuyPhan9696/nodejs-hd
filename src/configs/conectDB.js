// get the client
import { resolveShowConfigPath } from "@babel/core/lib/config/files";
import mysql from "mysql2"
// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejs-hd'
});

// simple query
// connection.query(
//     'SELECT * FROM `nodejs-htn`',
//     function (err, results, fields) {
//         console.log('>>>check mysql')
//         console.log(results); // results contains rows returned by server
//         let rows = results.map((row) => { return row });
//         console.log(rows); // results contains rows returned by server
//     }
// );


// with placeholder
// connection.query(
//     'SELECT * FROM `table` WHERE `name` = ? AND `age` > ?',
//     ['Page', 45],
//     function (err, results) {
//         console.log(results);
//     }
// );
export default connection;