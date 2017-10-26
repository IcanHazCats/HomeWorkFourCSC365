"use strict";

const express = require('express');

//returns functions from express modulde
const app = express();

//module used to keep paths consistant
const path = require('path');

//module used for yiew engine
const hoffman = require('hoffman');

//new date object
let dateObj = new Date();

//get current hour
let hourObj = undefined;
//dateObj.getHours();

//let hour = 20;


//using hoffman to seçt path and render my view engine, copied from https://www.npmjs.com/package/hoffman
app.set('views', path.join(__dirname, 'views')); // path to your templates
app.set('view engine', 'dust');
app.engine('dust', hoffman.__express());




//setting up some basic routing
app.get('/', function (req, res) {

    //console.log('logged hour', hour);

    //figure out the query parameter here
    let query = req.query;
    console.log(`This was the query:`);
    console.log(query);
    console.log(`This was the request URL: ${req.url}`);
    let hour = query.hour; //query["hour"];
    //let minute = query.minute; //query["minute"];
    console.log(`The hour is ${hour}`);

    //asign value for use in testing 
    if (hour === undefined) {
        hourObj = dateObj.getHours();

        console.log("hourObj, dateObj.getHours()", hourObj);

    } else {
        hourObj = hour;
        console.log("hourObj, hour", hourObj);

    }

    if (hourObj >= 7 && hourObj < 19) {

        //render day time theme and facts
        res.render('cDoodle', {
            style: 'dayTime',
            mainHeading: 'Egypt during the day!',
            imagesOne: 'day.jpg',
            imagesTwo: 'flag.jpg',
            imagesThree: 'dayCity.jpg',
            listHeading: 'Ten facts about Egypt during the day',
            rOne: 'Its so hot all of the water in this country actually evaporates during the day.',
            rTwo: "Egypt is where cats were invented, there are many open cat factories to tour during the day.",
            rThree: 'Because it is so hot during the day, most restaurants have large open patios.',
            rFour: 'Due to sun, most people must hide all of there skin, otherwise it will melt of within 30 minuts.',
            rFive: 'The sun can boil an egg here in 45 seconds',
            rSix: 'During the day, you can parachute off of the pyramids.',
            rSeven: 'The first cat in existance, was created within the walls of the sphinx monument.',
            rEight: 'The skys are always blue, while there are very few clouds.',
            rNine: 'Mario was originally to be an egyption, however nintendo decided to go with itallian.',
            rTen: 'The golden eagle on the flag is to represent the gleaming god color of the rolling sands in Egypt'
        });

    } else {

        //render night time theme and facts
        res.render('cDoodle', {
            style: 'nightTime',
            mainHeading: 'Egypt during the night..',
            imagesOne: 'night.jpg',
            imagesTwo: 'flag.jpg',
            imagesThree: 'nightCity.jpg',
            listHeading: "Ten facts about Egypt at Night",
            rOne: "Aliens are much more visible in the desert at night.",
            rTwo: "The pyramids are actually two deminsional, ancient egyptions mastered the art of perspective. There are special lights that show the real 2d nature of the structures at night.",
            rThree: "Egypt has the third largest city in the entire universe. It is a special site at night.",
            rFour: "Its so cold at night in Egypt, that they hold ice sculpting compititions at night.",
            rFive: "At night there are two moons visible",
            rSix: "At night, there are tours of ancient monuments guided by tourch light.",
            rSeven: "At night the nile river glows, this is rummored to be due to the ancient vudu of egyption kings.",
            rEight: "Meteor showers are a nightly activity, people gather in the streets to compete in how many meteors they can catch",
            rNine: "Egypt is the number one place in the world for their selection of night life locations in the city",
            rTen: "The sphinx statu stands on its hind legs at night, making it over 250 feet tall."


        });

    }

});


//set static resources
app.use('/resources', express.static('resources'));
//set port to 3000
app.listen(3000, function () {
    console.log("Listening on port 3000");

});
