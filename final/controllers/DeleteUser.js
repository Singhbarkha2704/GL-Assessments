const express=require('express')
const router = express.Router()
const axios = require('axios')

router.delete('/users/delete/:id', async (req, res) => {
    const userId = req.params.id
    console.log(userId);

    const deletedUser = await axios.delete(`http://localhost:3002/users/${userId}`)
        .then(response => {
            console.log(response);
            res.send({ "msg": 'deleted successfully' })

        } 
        )
        .catch(err => console.log(err))
    
    // const existingUsers = await axios.get(`http://localhost:3002/users`)
    //     .then(response => console.log(response))
    //     .catch(err => console.log(err))
    
    // console.log(existingUsers);
    // res.send(JSON.stringify(existingUsers));

    // const filterUser = existingUsers.filter(user => user.id !== userId);

    // try {
    //     const deleteData = await axios.delete(`http://localhost:3002/users/${id}`)
    // }
    // catch (err) {
    //     console.log(err);
    //     res.send(err)
    // }

    //  const result = axios.get(`http://localhost:3002/users`).then(res=>console.log(res)).catch(err=>console.log(err))
    // // console.log(result.data[0].password);
    // res.send(JSON.stringify(result) )
    
    // console.log(result.data[0].password);
    // res.send(JSON.stringify(result.data) )
})

module.exports=router