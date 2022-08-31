const express=require('express')
const router=express.Router()
const jwt = require('jsonwebtoken')
const axios = require('axios')


router.get('/logout',(req,res)=>{
    res.clearCookie('authorizer')
    res.send('Cookie has been deleted successfully');
});
    

module.exports=router