const userControllers = require('../Controllers/userControllers');
const jwt = require("jsonwebtoken")

const router = require('express').Router();

// jwt authentication

const verifyToken = (req, res, next) => {
    // console.log(req.headers,"hello headers");
    const token = req.headers.authorization.split(' ')[1]
    console.log(token);
    if (!token) {
        res.send("We need a token, please give it to us next time");
    } else {

        jwt.verify(token, process.env.JWTPRIVATEKEY, (err, decoded) => {
            if (err) {
                console.log("failed");
                res.status(401).json({ auth: false, message: "you are failed to authenticate" });
            } else {
               console.log("successdfully verifies");
                req.userId = decoded.id;
                next();
            }
        });
    }
}

   router.post('/signup',userControllers.signup)

   router.post('/login',userControllers.login)

   router.get('/getdata',verifyToken,userControllers.getdata)



module.exports = router