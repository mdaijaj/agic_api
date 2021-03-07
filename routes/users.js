const express=require('express');
const router=express.Router();
const user=require('../controller/users')


router.get('/profile', user.country_or_city)
router.post('/post_data', user.priceAndAvailability)
router.get('/get_attaction', user.attraction)
router.post('/booking', user.booking)
module.exports=router;
