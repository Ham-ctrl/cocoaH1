const express = require('express');
const router    = express.Router();


const packDB = require('../database/dbform');
const Cocoa = require('../modelz/model');
const packModel = require('../modelz/model');

//search ROUTER

router.get( '/search', (req, res) =>{
    
    //Render stage below;
    res.render('homeDisplay');
    //res.redirect('routing/submit')

    // find , database instructions along with router instru can mitigate
})
//Adjacent POST for above GET rendering OR it may not be this way

//contact ROUTER
router.get('/contact', (req, res) =>{
    res.render('contact');
})

router.post('/contact', (req, res) =>{
    // database fusion with router; workable
    let data = {
        description: 'This is cocoa page',
        purchase: 'purchase with Ghanaian cedis'
    }
    let { name, companyName, contact_email, message} = req.body;

    Cocoa.insertMany({
        name, 
        companyName, 
        contact_email, 
        message
    })
    .then( cocoas => {
        console.log(cocoas)
        //maybe counld replace GET request rendering here AND 

        // Re-rendering of which PART.
        res.redirect('/routing/search')
    })
    .catch( (err) => {console.log(err)})

})

router.post('/api', (request, response) => {
    console.log(request.body);
    const data = request.body;
    const timeStamp = Date.now()
    

    //Here is inserting into the database and Adding
    Cocoa.insertMany( {
        data,
        timeStamp
    })
    .then(cocoas => {
        console.log(cocoas)
    })
    .catch( (err) => {console.log(err)})
})

///

router.get( '/about', (req, res) =>{  
    res.render('aboutDisplay')
})

router.get( '/corp', (req, res) =>{
    res.render('corpRespDisplay')
})

router.get( '/butter', (req, res) =>{
    res.render('cocoabutter')
})

router.get( '/beans', (req, res) =>{
    res.render('cocobeans')
})

module.exports = router;