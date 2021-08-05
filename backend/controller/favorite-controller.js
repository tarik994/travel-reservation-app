const conn = require('../connection');


const addFavorite = (req, res) => {
    const {name,user_id} = req.body;
    console.log(name,user_id)
    const sql = `INSERT INTO FAVORITE(name,user_id) VALUES('${name}',${user_id})`;
    conn.query(sql, (err, result) => {
        if (err) {
            return res.status(500).json(err)
        }
        res.status(200).json(result)
        
    });

}

const favoritesDestination = (req, res) => {
    const id = req.params.id;
    conn.query(`SELECT * FROM FAVORITE WHERE USER_ID = ${id}`, (err, result) => {
        if (err) throw err;
        console.log(result)
        res.json(result)

    });

}


const deleteFavorite = (request, response) => {
    const id = request.params.id
    console.log(id)
    const sql = `DELETE FROM FAVORITE WHERE ID = ${id}`
    conn.query(sql, (err, result) => {
        if (err) throw err;
        response.json(result)
    })

}




module.exports = {
   addFavorite,
   favoritesDestination,
   deleteFavorite
  };