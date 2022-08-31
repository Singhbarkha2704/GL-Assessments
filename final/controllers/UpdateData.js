const express=require('express')
const router = express.Router()
const axios = require('axios')

router.put('/updateusers/:id', async (req, res) => {
    const userId = req.params.id
    const {username, email}=req.body
    const result = await axios.patch(`http://localhost:3002/users/${userId}`, {
        id:userId,
        username: username,
        email: email,
        
    }).then(response=>{res.send({"msg":'update user successfully'})})
    .catch(err=>{res.status(404).send({"msg":'updation failed'})})
})

module.exports=router