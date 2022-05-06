const express=require('express');


const router=express.Router();

const locationcontroller=require('../controller/locations');
const mealtypecontroller=require('../controller/mealtypes');
const restaursntcontroller=require('../controller/restaurant');
const usercontroller=require('../controller/user');
const paymentController=require('../controller/payment');
const itemscontroller=require('../controller/items');




router.get('/locations',locationcontroller.getLocations);
router.get('/mealtypes', mealtypecontroller.getMealTypes);
router.get('/restaurantbylocation/:locationId',restaursntcontroller.getRestaurantByLocation)
router.post('/filter', restaursntcontroller.filterRestaurants);
router.get('/getrestaurantbyid/:restaurantId', restaursntcontroller.getRestaurantDetailsById);
router.get('/getMenuItemsByRestaurant/:restaurantID',itemscontroller.getMenuItemsByRestaurant);
router.post('/usersignup', usercontroller.signUpUser);
router.post('/login',usercontroller.loginUser);
router.post('/payment',paymentController.payments);
router.post('/callback',paymentController.callback);
module.exports = router;