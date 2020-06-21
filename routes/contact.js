const express = require('express')
const Contact = require('../models/Contact')


const router = express.Router()

router.post('/submit', async(req, res) => {
    // Create a new user
    try {
        const message = new Contact(req.body)
         await message.save()
         res.status(201).send({ msg: "Message Sent!" })
        }
    catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router