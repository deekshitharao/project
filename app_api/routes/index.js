var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlReviews = require('../controllers/reviews');


router.get('/todo', ctrlLocations.locationsListByDistance);
router.post('/todo', ctrlLocations.locationsCreate);
router.get('/todo/:locationid', ctrlLocations.locationsReadOne);
router.put('/todo/:locationid', ctrlLocations.locationsUpdateOne);
router.delete('/todo/:locationid', ctrlLocations.locationsDeleteOne);

// reviews
router.post('/todo/:locationid/reviews', ctrlReviews.reviewsCreate);
router.get('/todo/:locationid/reviews/:reviewid',ctrlReviews.reviewsReadOne);


router.put('/todo/:locationid/reviews/:reviewid',ctrlReviews.reviewsUpdateOne);
router.delete('/todo/:locationid/reviews/:reviewid',ctrlReviews.reviewsDeleteOne);


module.exports = router;