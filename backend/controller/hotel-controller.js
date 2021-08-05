const conn = require('../connection');

const saveHotel = (request, response) => {
    const { name, description } = request.body;
    const sql = `INSERT INTO HOTEL(name,description) VALUES('${name}','${description}')`;
    conn.query(sql, (err, result) => {
        if (err) {
            return response.status(200).json(err)

        }
        response.status(200).json(result);
        console.log(result)
    });
};


const getHotelsForDest = (req, res) => {
    const id = req.params.destinationID
    conn.query(`SELECT H.* FROM HOTEL H JOIN DESTINATION_HOTEL DH ON DH.HOTEL_ID = H.ID WHERE DH.DESTINATION_ID =${id}`, (err, result, field) => {
        if (err) throw err;
        console.log(result)
        res.json(result)

    });
};

const hotelByDest = (req, res) => {
    const destId = req.params.id
    conn.query(`SELECT * FROM destination_hotel dh JOIN hotel h ON dh.hotel_id = h.id  WHERE DESTINATION_ID = ${destId}`, (err, result, field) => {
        if (err) throw err;
        console.log(result)
        res.json(result)

    });
};

const addHotelToDest = (req,res) => {
    const { hotelId, destId } = req.body
    const sql = `INSERT INTO destination_hotel (hotel_id, destination_id) VALUES (?, ?)`

    conn.query(sql, [hotelId, destId], (err, result)=>{
        if(err)throw err
        res.status(200).json({msg: 'Hotel successfully added'})
    })
}

const getAllHotels = (req, res) => {
    conn.query('SELECT * FROM HOTEL', (err, result, field) => {
        if (err) json.send('GRESKA');
        console.log(result)
        res.json(result)

    });
};

const deleteHotel = (req,res) => {
    const id = req.params.id
    console.log(id)
    const sql = `DELETE FROM HOTEL WHERE ID = ${id}`
    conn.query(sql, (err, result) => {
        if (err) throw err;
        res.json(result)
    })

}





module.exports = {
  saveHotel,
  getHotelsForDest,
  hotelByDest,
  addHotelToDest,
  getAllHotels,
  deleteHotel
  

};