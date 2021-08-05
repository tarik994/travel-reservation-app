const { response } = require('express');
const { commit } = require('../connection');
const conn = require('../connection');

const getUserById = (req,res) => {
    conn.query('SELECT * FROM USER',(err,result,field)=>{
        if(err) throw err;
        res.json(result)

    });
 };


 const saveUser = (req,res) => {
     console.log(req.body)
     const {firstName,lastName,username,email,password} = req.body;
     const sql =`INSERT INTO USER(name,username,surname,email,password) VALUES('${firstName}','${username}','${lastName}','${email}','${password}')`;
     conn.query(sql,(err,result)=>{
         if(err){
             return res.status(200).json(err)

         } 
         res.status(200).json({id: result.insertId} );
        });

    }

    const loginUser = (req,res) =>{
        const{email,password} = req.body;
        const sql ="SELECT * FROM USER WHERE EMAIL = ? and PASSWORD = ?";
     conn.query(sql,[email,password],(err,result)=>{
         if(err){
             return res.status(200).json(err)

         } 
         res.status(200).json(result[0] || {});
        });


    }

    const deleteUser = (request, response) => {
        const id = request.params.id
        console.log(id)
        const sql = `DELETE FROM USER WHERE ID = ${id}`
        conn.query(sql, (err, result) => {
            if (err) throw err;
            response.json(result)
        })
    
    }

    const getUserInfo = (request,response) =>{
        const id = request.params.id;
        console.log(id)
        const sql = `SELECT * FROM USER WHERE ID = ${id}`;
        conn.query(sql,(err,result)=>{
            if(err) throw err;
            response.json(result)
        })
    }
   


module.exports = {
    getUserById,saveUser,loginUser,deleteUser,getUserInfo
}