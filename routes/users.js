const express = require('express')

const router = express.Router()


router.get('/logout', async(req, res) => {
    // Log user out of the application
    try {
        req.user.token = ""
        await req.user.save()
        res.send()
    } catch (error) {
        res.status(500).send(error)
    }
})

//Get user by ID
router.get('/', (req, res) => {
    res.json(req.user)
})

router.get('/checkAuth', (req, res) => {
    res.status(201).send("ok")
})

//Delete user by id
router.delete('/', async(req, res) => {
    req.user.remove(err => {
        if (err) {
            res.status(500).json(err)
        } else {
            res.status(204).json({ msg: 'removed' })
        }
    })
})

router.patch('/', async(req, res) => {
    if (req.body._id) {
        delete req.body._id;
    }
    for (let p in req.body) {
        req.user[p] = req.body[p]
    }
    req.user.save()
    res.status(201).json(req.user)
})


module.exports = router