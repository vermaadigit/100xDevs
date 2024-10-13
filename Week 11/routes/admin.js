const { Router } = require("express");
const adminMiddleware = require("../middleware/admin");
const { Admin } = require('../db/index')
const { Course } = require('../db/index')
const router = Router();

// Admin Routes
router.post('/signup', async (req, res) => {
    // Implement admin signup logic
    const username = req.body.username
    const password = req.body.password

    await Admin.create({
        username : username,
        password : password
    })

    res.json({
        message : 'Admin created successfully'
    })

});

router.post('/courses', adminMiddleware, async (req, res) => {
    // Implement course creation logic
    const title = req.body.title
    const description = req.body.description
    const imageurl = req.body.imageurl
    const price = req.body.price

    //Also use Zod validation

    const newCourse = await Course.create({
        title : title,
        description : description,
        imageURL : imageurl,
        price : price
    })

    console.log(newCourse)

    res.json({
        message : 'Course created successfully',
        courseId : newCourse._id
    })


});

router.get('/courses', adminMiddleware, async (req, res) => {
    // Implement fetching all courses logic
    const response = await Course.find({})
    
    res.json({
        allCourse : response
    })
});

module.exports = router;