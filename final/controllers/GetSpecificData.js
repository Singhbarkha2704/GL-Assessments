const express=require('express')
const router = express.Router()
const axios = require('axios')

router.get('/getusers/:id', async (req, res) => {
    const userId=req.params.id
    await axios.get(`http://localhost:3002/users/${userId}`)
        .then(response => {
            console.log(response);
            res.send( JSON.stringify(response.data))
        })
        .catch(err => {
            console.log(err)
            res.status(404).send({"msg":'fetch data failed'})
        })
})

module.exports=router