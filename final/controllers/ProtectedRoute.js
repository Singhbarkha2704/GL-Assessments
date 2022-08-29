const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken')
const axios = require('axios')
const { v4: uuid } = require('uuid');


router.post('/createadmin',async(req,res)=>{
    const cookieip = req.cookies.authorizer
    console.log("cookieip",cookieip);
    
    const decodedtoken=jwt.verify(cookieip,'myra')
    console.log('decodedtoken', decodedtoken)
    
    if (decodedtoken.role === 'admin') {
        const { username, email, password } = req.body;
        try {
            const insertNewUser = await (
                await axios.post(`http://localhost:3002/users`, {
                    id: uuid(),
                    username: username,
                    email: email,
                    password: password,
                    role:"admin"
                })
            ).data;
            res.status(201).json({
                msg: 'new user created',
                user: insertNewUser,
            });
        } catch (err) {
            res.status(404).json({
                msg: err.message
            })
        }
    }else{
        res.send({'msg':'u are not authorized ',"status":false})
    }
    res.send('dummy')

})

module.exports=router