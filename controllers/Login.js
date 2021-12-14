const jwt = require('jsonwebtoken');
var sha256 = require('js-sha256');
var login_model = require('../models/custom_models/login');

exports.Login = async function (req, res) {
    try
    {
        let getUser = await login_model.getUserLogin(req.body.username)
        if(getUser[0].password == sha256(req.body.password))
        {
            const token = jwt.sign({username: getUser[0].username, fullname: getUser[0].fullname, user_id: getUser[0].user_id}, "secretkey",{expiresIn: "3h"})
            res.status(200).json({
                status: true,
                token: token
            })
        }
        else
        {
            res.status(200).json({
                status: false,
                message: "invalid username or password"
            })
        }
    }
    catch(err)
    {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

exports.Auth = async function (req, res, next) {
    
    const bearer_header = req.header('Authorization');
    if (typeof bearer_header == 'undefined')
    {   
        return res.status(401).send('Access Denied: No Token Provided!');
    }
    else
    {
        try {
            const bearer = bearer_header.split(' ')
            const bearer_token = bearer[1]
            const decoded = jwt.verify(bearer_token, "secretkey");
            var user = await login_model.getUserLogin(decoded.username)
            // console.log(user)
            return next();
        }
        catch (ex) {
            console.log(ex)
            if(ex.name == 'TokenExpiredError')
            {
                const bearer = bearer_header.split(' ')
                const bearer_token = bearer[1]
                return res.status(401).json({
                    status: false, errorType: 'Token Error',errorMessage : "Token Expired"
                })
            }
            else
            {
                return res.status(401).json({
                    status: false, errorType: 'Token Error',errorMessage : "Token Invalid"
                })
            }
        }
    }    
    
}