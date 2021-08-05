const conn = require('../connection');

const getReservationForUser = (req, res) => {
    const id = req.params.id;
    conn.query(`SELECT * FROM RESERVATION WHERE USER_ID = ${id}`, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.json(result)

    });

}
const deleteReservation = (request, response) => {
    const id = request.params.id
    console.log(id)
    const sql = `DELETE FROM RESERVATION WHERE ID = ${id}`
    conn.query(sql, (err, result) => {
        if (err) throw err;
        response.json(result)
    })

}

const makeReservation = (req, res) => {
    const {name,description,price,destination_id,hotel_id,user_id} = req.body;
    const sql = `INSERT INTO RESERVATION(name,description,price,destination_id,hotel_id,user_id) VALUES('${name}','${description}','${price}',${destination_id},${hotel_id},${user_id})`;
    conn.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        res.status(200).json(result)
        console.log(res)
    });

}

module.exports = {

    getReservationForUser,
    deleteReservation,
    makeReservation
    
    
}