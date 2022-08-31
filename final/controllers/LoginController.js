const express=require('express')
const router = express.Router()
const axios = require('axios')
const jwt = require('jsonwebtoken')

router.post('/login',async (req,res)=>{
    const {email,password}=req.body
    try{
        // const result=await usermodel.findOne({email:data.email})
        const result = await (
            await axios.get(`http://localhost:3002/users?q=${email}`)
        )
        console.log('result-data:',result.data[0])
        // res.send(result.data[0])
        if(result.data[0]){
            if (result.data[0].password === password) {
                const token = jwt.sign({ email: email, role: result.data[0].role }, 'myra')
                console.log('token:', token);
                res.status(200).cookie('authorizer', token, { sameSite: 'strict', httpOnly: true, maxAge: 3600000 })
                
                res.send({ "msg": 'you are authenticated', "status": true, "role": result.data[0].role, "username": result.data[0].username, "email": result.data[0].email })
            }
            else {
                res.send({ "msg": 'check your password , not authenticated', "status": false})
            }
        }
        else{
            res.send({"msg":'the email id does not exists',"status":false})
        }
       
    }
    catch(e){
        res.send({'msg':'some error occured',"status":false})
    }
    
   
})
module.exports=router