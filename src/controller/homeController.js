import connection from '../configs/conectDB'
let getHomePage = (req, res) => {
    //logic
    let data = []
    connection.query(
        'SELECT * FROM `nodejs-htn`',
        function (err, results, fields) {
            console.log('>>>check mysql')
            console.log(results); // results contains rows returned by server
            results.map((row) => { return row });
        }
    );
    return res.render('index.ejs', { dataspace: JSON.stringify(data) });
}
let getAboutPage = (req, res) => {
    //logic
    return res.send('Phan Hà Duy');
}
module.exports = {
    getHomePage,
    getAboutPage
}