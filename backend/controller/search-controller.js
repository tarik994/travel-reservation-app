const conn = require('../connection');

const searchDestination = (req,res) => {
    console.log(req.params)
    conn.query(`SELECT * FROM DESTINATION WHERE NAME LIKE '%${req.params.searchDestination}%'`,(err,result,field)=>{
        if(err) throw err;
        console.log(result);
        res.json(result)
        
    });
 };


module.exports = {
    searchDestination
};