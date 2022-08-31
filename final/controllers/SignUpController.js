const express=require('express')
const router = express.Router()
const axios = require('axios')
const { v4: uuid } = require('uuid');

router.post('/signup', async (req, res) => {
    console.log("user registration in progress..");
    const { username, email, password, role } = req.body;
    // console.log(user);
    // res.json({ user, })
    try {
        const insertNewUser = await (
            await axios.post('http://localhost:3002/users', {
                id: uuid(),
                username: username,
                email: email,
                password: password,
                role:"user"
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
})

module.exports=router