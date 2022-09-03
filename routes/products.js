const express = require('express');
const router = express.Router();

const {getAllProducts} = require('../controllers/products'); //importing the getAllProducts function from the products controller


router.route('/').get(getAllProducts); //get all products




module.exports = router; //export router to app.js