const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user.controller')

router.route("/").get(userCtrl.getUsers);

module.exports = router;