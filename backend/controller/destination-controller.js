const { json } = require('body-parser');
const conn = require('../connection');

const destination = (req, res) => {
    conn.query('SELECT * FROM DESTINATION', (err, result, field) => {
        if (err) json.send('GRESKA');
        console.log(result)
        res.json(result)

    });
};
const destinationID = (req, res) => {
    const id = req.params.id;
    console.log('ja sam neki ID', id)
    conn.query(`SELECT * FROM DESTINATION WHERE ID = ${id}`, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.json(result)

    });
};


const saveDestination = (request, response) => {
    const { name, description, price, image_url, image1_url, image2_url, image3_url } = request.body;
    const sql = `INSERT INTO DESTINATION(name,description,price,image_url,image1_url,image2_url,image3_url) VALUES('${name}','${description}','${price}','${image_url}','${image1_url}','${image2_url}','${image3_url}')`;
    conn.query(sql, (err, result) => {
        if (err) {
    
            status(200).json(err)

        }
        response.status(200).json(result);
        console.log(result)
    });
}


const deleteDestination = (request, response) => {
    const id = request.params.id
    console.log(id)
    const sql = `DELETE FROM destination WHERE ID= ${id}`
    conn.query(sql, (err, result) => {
        if (err) throw err;
        response.json(result)
    })
     
    // const sql = `SET FOREIGN_KEY_CHECKS = 0 ; DELETE FROM DESTINATION WHERE ID = ${id} ; DELETE FROM destination_hotel WHERE DESTINATION_ID= ${id}`
    //DROP FROM DESTINATION_HOTEL FOREIGN KEY destination_hotel_fk ; 
   //ALTER TABLE DESTINATION_HOTEL DROP FOREIGN KEY destination_hotel_fk
   //DELETE FROM destination WHERE ID
   //DELETE FROM DESTINATION_HOTEL DROP FOREIGN KEY destination_hotel_fk
}


const updateDestination = (req, response) => {
    const { name, description, price, destination_id } = req.body;
    const sql = `UPDATE DESTINATION SET name = ?,description = ?, price = ? WHERE ID = ${destination_id} `
    conn.query(sql, [name, description, price], (err, result) => {
        if (err) throw err;
        response.status(200).json(result)
    })
}

module.exports = {
    destination,
    destinationID,
    saveDestination,
    deleteDestination,
    updateDestination



};