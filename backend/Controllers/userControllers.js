const { user } = require("../Modals/User")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const { default: axios } = require("axios")
const { request } = require("express")

module.exports = {
    signup:async (req, res) => {
        try {
            let { displayname, password, email } = req.body
            let userinfo =await user.findOne({ email: email })
            if (userinfo === undefined) {
                console.log("inside");
                res.status(500).json({ message: "email already registered" })
            } else {
                bcrypt.hash(password, 10, (err,hashedPass) => {
                    console.log(hashedPass);
                    let userTemplate = new user({
                        email: email,
                        displayname: displayname,
                        password: hashedPass
                    })
                    userTemplate.save().then(() => {
                        res.status(200).json({ message: "successfully registered" })
                    }).catch((err) => {
                        console.log(err.message);
                        res.status(500).json({ message: "womething went wrong" })
                    })
                })
            }
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: "womething went wrong" })
        }
    },
    login:async(req,res)=>{
            try {
                console.log(req.body);
                let {email,password} = req.body
                console.log(email);
                let userInfo = await user.findOne({email:email})
                if(userInfo != undefined) {
                    bcrypt.compare(password, userInfo.password).then((result)=>{
                        console.log("loggedin");
                        const token = jwt.sign({
                        }, process.env.JWTPRIVATEKEY, {
                            expiresIn: 1000 * 60 * 60 * 24
                        });
                            res.status(200).json({message:"user loggedin",token,userInfo})
                    }).catch((err)=>{
                        console.log(err,"err");
                        res.status(401).json({message:"password or email is wrong"})
                    })
                }else{
                    console.log("err")
                    res.status(401).json({message:"user not found"})
                }
 
            } catch (error) {
                console.log(error);
                res.status(500).json({message:"something went wrong"})
            }
    },
    getdata:(req,res)=>{
        try {
            const page = req.query.page
            console.log(page);
            const limit = 4

            axios.get('https://picsum.photos/v2/list').then(async(response)=>{
               const data =await response.data.slice(page,limit)
                res.status(200).json(data)                
            }).catch((error)=>{
                res.status(500).json({message:"something went wrong"})
            })
        } catch (error) {
            res.status(500).json({message:"something went wrong"})
        }
    }
}