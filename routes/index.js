var express = require('express');
var router = express.Router();
var sha256 = require('js-sha256').sha256;
var fetch = require('node-fetch');

function generateRandomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}


/* GET home page. */
router.get('/generateHash', function (req, res, next) {
    var hash = sha256(generateRandomString(25));
    res.status(200).json({
        hashResult: hash
    });
});

router.get('/checkHash', async function (req, res, next) {
    const url = 'http://localhost:5000/generateHash';
    const result = await fetch(url);
    var hash = await result.json();
    var lastCharNum = parseInt(hash.hashResult.slice(-1));

    if (isNaN(lastCharNum)) {
        res.sendStatus(400);
    } else {
        if (lastCharNum % 2 === 0) {
            res.sendStatus(400);
        } else {
            console.log(hash);
            res.sendStatus(200);
        }
    }
});



module.exports = router;
