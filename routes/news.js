const express = require('express')
const router = express.Router()
const News = require('../models/News')


router.get('/', async(req, res) => {
    News.find().exec().then(data => {
            //console.log(data);
            res.status(200).json(data);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});


router.get('/:newsId', async(req, res) => {
    try {
        const news = await News.findById(req.params.newsId);
        res.json(news);
    } catch (err) {
        res.json({ error: err });
    }
});

module.exports = router