import pool from '../configs/conectDB'

let getHomePage = async (req, res) => {
    //logic
    const [rows, fields] = await pool.execute('SELECT * FROM `nodejs-htn`');
    return res.render('index.ejs', { dataSpace: rows })
}
let getAboutPage = (req, res) => {
    //logic
    return res.send('Phan Hà Duy');
}
module.exports = {
    getHomePage,
    getAboutPage
}