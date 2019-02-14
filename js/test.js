const express = require('express');
const router = express.Router();

const sports = {
    id: 1, name: "golf",
    id: 2, name: "football",
    id: 3, name: "basketball"
}

router.get('/', (req, res) => {
    res.send(sports)
});