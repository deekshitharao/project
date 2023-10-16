module.exports.homelist = function(req, res) {
    res.render('location-list', {
        title: 'To-Do - check your to-dos for a better tomorrow',
        pageHeader: {
            title: 'To-Do',
            strapline: 'Check your reminders and work accordingly'
        },
        sidebar: "To-Do reminds you to do your daily works on time!",
        locations: [{
            name: 'Homework',
            address: 'Math homework 26 problems',
            rating: 3,
            facilities: ['deadline: 18 oct 2023', 'second hour'],
            distance: '1 hour'
        }, {
            name: 'Incomplete notes',
            address: 'Science incomplete classwork 2 pages',
            rating: 4,
            facilities: ['deadline:17 October 2023', 'to study'],
            distance: '30 min'
        }, {
            name: 'Java Training',
            address: 'Zoom online class 7:00pm',
            rating: 2,
            facilities: ['Deadline:16 October 2023', 'online coaching'],
            distance: '2 hours'
        }]
    });
};
//locationInfo//
module.exports.locationInfo = function(req, res) {
    res.render('location-info', {
        title: 'Homework',
        pageHeader: {
            title: 'Homework'
        },
        sidebar: {
            context: 'Doing your homework on time helps you achieve your teacher impression',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Homework',
            address: 'Math homework 26 problems',
            rating: 3,
            facilities: ['deadline: 18 oct 2023', 'second hour'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Deadline',
                opening: '18 October 2023',
                closing: 'wednesday',
                closed: false
            }, {
                days: 'Duration',
                opening: '1',
                closing: 'hour',
                closed: false
            }, {
                days: 'do today',
                closed: false
            }],
            reviews: [{
                author: 'Deekshitha',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'Gives accurate report'
            }, {
                author: 'Masood',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'good updates'
            }]
        }
    });
};

//locationInfo2//
module.exports.locationInfo2 = function(req, res) {
    res.render('location-info2', {
        title: 'Cafe Raasta',
        pageHeader: {
            title: 'Cafe Raasta'
        },
        sidebar: {
            context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
            callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
        },
        location: {
            name: 'Cafe Raasta',
            address: '125 High Street, Reading, RG6 1PS',
            rating: 3,
            facilities: ['Hot drinks', 'Food', 'Premium wifi'],
            coords: {
                lat: 51.455041,
                lng: -0.9690884
            },
            openingTimes: [{
                days: 'Monday - Friday',
                opening: '7:00am',
                closing: '7:00pm',
                closed: false
            }, {
                days: 'Saturday',
                opening: '8:00am',
                closing: '5:00pm',
                closed: false
            }, {
                days: 'Sunday',
                closed: true
            }],
            reviews: [{
                author: 'Simon Holmes',
                rating: 5,
                timestamp: '16 July 2013',
                reviewText: 'What a great place. I can\'t say enough good things about it.'
            }, {
                author: 'Charlie Chaplin',
                rating: 3,
                timestamp: '16 June 2013',
                reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
            }]
        }
    });
};
//locationInfo3//
module.exports.locationInfo3 = function(req, res) {
        res.render('location-info3', {
            title: 'Burger King',
            pageHeader: {
                title: 'Burger King'
            },
            sidebar: {
                context: 'is on Loc8r because it has accessible wifi and space to sit down with your laptop and get some work done.',
                callToAction: 'If you\'ve been and you like it - or if you don\'t - please leave a review to help other people just like you.'
            },
            location: {
                name: 'Burger King',
                address: '125 High Street, Reading, RG6 1PS',
                rating: 3,
                facilities: ['Hot drinks', 'Food', 'Premium wifi'],
                coords: {
                    lat: 51.455041,
                    lng: -0.9690884
                },
                openingTimes: [{
                    days: 'Monday - Friday',
                    opening: '7:00am',
                    closing: '7:00pm',
                    closed: false
                }, {
                    days: 'Saturday',
                    opening: '8:00am',
                    closing: '5:00pm',
                    closed: false
                }, {
                    days: 'Sunday',
                    closed: true
                }],
                reviews: [{
                    author: 'Simon Holmes',
                    rating: 5,
                    timestamp: '16 July 2013',
                    reviewText: 'What a great place. I can\'t say enough good things about it.'
                }, {
                    author: 'Charlie Chaplin',
                    rating: 3,
                    timestamp: '16 June 2013',
                    reviewText: 'It was okay. Coffee wasn\'t great, but the wifi was fast.'
                }]
            }
        });
    };
//addReview//    
module.exports.addReview = function(req, res) {
    res.render('location-review-form', {
        title: 'Review Starbucks on Loc8r',
        pageHeader: {
            title: 'Review Starbucks'
        }
    });
};