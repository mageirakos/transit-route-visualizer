const express = require('express')
const User = require('../models/User')


const router = express.Router()

router.post('/register', async(req, res) => {
    // Create a new user
    try {
        if (!(req.body.password == req.body.retypepass)) {
            res.status(400).json({ "error": "Passwords do not match" })
        } else {
            const user = new User(req.body)
            await user.save()
                // const token = await user.generateAuthToken()
            res.status(201).send({ msg: "User registered" })
        }
    } catch (error) {
        res.status(400).send(error)
    }
})

router.post('/login', async(req, res) => {
    //Login a registered user
    try {
        const { username, password } = req.body
        const user = await User.findByCredentials(username, password)
        if (!user) {
            return res.status(401).send({ error: 'Login failed! Check authentication credentials' })
        }
        const token = await user.generateAuthToken()
        res.cookie("token", token)
        res.status(204).send()
    } catch (error) {
        res.status(400).send({ error })
    }

})


module.exports = router