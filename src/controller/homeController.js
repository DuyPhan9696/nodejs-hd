let getHomePage = (req, res) => {
    //logic
    return res.render('index.ejs');
}
let getAboutPage = (req, res) => {
    //logic
    return res.send('Phan Hà Duy');
}
module.exports = {
    getHomePage,
    getAboutPage
}