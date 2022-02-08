import pool from "../configs/conectDB";

let getAllLocation = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM `nodejs-htn`');
    return res.status(200).json({
        data: rows
    })
}
module.exports = {
    getAllLocation
}