const express=require('express')
const router = express.Router()
const axios = require('axios')

router.get('/getusers', async (req, res) => {
    const result = await axios.get(`http://localhost:3002/users`)
    console.log(result.data[0].password);
    res.send(JSON.stringify(result.data) )
})

module.exports=router