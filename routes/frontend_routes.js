const express = require('express')
const router = express.Router()
var path = require('path');


// html
router.get('/', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/index.html'));
});

router.get('/about.html', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/about.html'));
});

router.get('/contact.html', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/contact.html'));
});

router.get('/index_when_login.html', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/index_when_login.html'));
});

router.get('/routes.html', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/routes.html'));
});

router.get('/login.html', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/login.html'));
});

router.get('/nearme.html', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/nearme.html'));
});

router.get('/news.html', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/news.html'));
});

router.get('/register.html', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/register.html'));
});


// CSS
router.get('/style/style.css', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/style/style.css'));
});

// IMAGES
router.get('/img/back.jpg', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/img/back.jpg'));
});

router.get('/img/logo.jpg', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/img/logo.jpg'));
});

router.get('/img/logo.png', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/img/logo.png'));
});

router.get('/img/logo2-01.png', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/img/logo2-01.png'));
});

router.get('/img/logo.2png', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/img/logo.2png'));
});

// JAVASCRIPT
router.get('/script/login-button.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/login-button.js'));
});

router.get('/script/load-news.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/load-news.js'));
});

router.get('/script/login.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/login.js'));
});


router.get('/script/register-button.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/register-button.js'));
});


router.get('/script/route-options.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/route-options.js'));
});


router.get('/script/routes-map.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/routes-map.js'));
});

router.get('/script/stops-nearme-map.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/stops-nearme-map.js'));
});

router.get('/script/checkAuth.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/checkAuth.js'));
});

router.get('/script/logout-button.js', async(req, res) => {
    // den loadarei ta data swsta...
    res.sendFile(path.join(__dirname + '/../frontend/script/logout-button.js'));
});


module.exports = router