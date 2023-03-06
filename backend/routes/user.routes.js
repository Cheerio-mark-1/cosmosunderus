const express = require('express')
const router = express.Router()
const userCtrl = require('../controller/user.controller')

router.route("/").get(userCtrl.getUsers);
router.route('/2').get(userCtrl.getUser2)

module.exports = router;