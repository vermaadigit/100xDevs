const { Admin } = require('../db/index')
// Middleware for handling auth
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
    const username = req.headers.username   //test@gmail.com
    const password = req.headers.password   //test@123

    Admin.findOne({
        username,
        password
    })
    .then(function(value) {
        if(value) {
            next()
        } else {
            res.status(403).json({
                message : 'Incorrect Credential for Admin'
            })
        }
    })

}

module.exports = adminMiddleware;