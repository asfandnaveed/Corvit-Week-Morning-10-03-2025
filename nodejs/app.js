const express = require('express');
const app = express();
const port = 3003;

const database = require('./db');

//middle ware
app.use(express.json());

app.post('/users/login',(req , res)=>{

    const { email , pass} = req.body;

    if(!email || !pass){
        res.json({
            message:"Empty Email / Pass !"
        });
    }
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    database.query(sql , [email,pass], (error, result )=>{

        if(error){
            console.log("ERROR",error);
        }

        if(result.length > 0){
            res.json(result);
        }else{
            res.json({
                message:"Invalid Credentials !!"
            });
        }


    });

});

app.listen(port,()=>{
    console.log("Server is Running !!");
});