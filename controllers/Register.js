var register_model = require('../models/custom_models/register');
var multer  = require('multer');
const { insertUser } = require('../../api_surety_online/models/admin_models/user');
var sha256 = require('js-sha256');
const publicIp = require('public-ip');
var storage = multer.memoryStorage()
var upload_multer = multer({ storage: storage })
module.exports.multer_option = upload_multer.single('profile_picture')

exports.getUserById = async function (req, res) {
    try
    {
        let getUserById = await register_model.getUserById(req.params.user_id)
        res.status(200).json({
            status: true,
            data: getUserById[0]
        })
        
    }
    catch(err)
    {
        console.log(err)
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

exports.getProfilePict = async function (req, res) {
    try
    {
        let getUserById = await register_model.getUserById(req.params.user_id)
        const download = Buffer.from(getUserById[0].profile_picture, 'base64');
            res.setHeader('Content-disposition', 'inline; filename="pp_'+getUserById[0].username+'"');
            res.setHeader('Content-type', 'image/jpg');
            res.end(download);        
    }
    catch(err)
    {
        console.log(err)
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

exports.postInsertUser = async function (req, res) {
    try
    {
        req.body.profile_picture = req.file.buffer.toString('base64')
        req.body.password = sha256(req.body.password)
        let insert_user = await register_model.insertUser(req.body)
        res.status(200).json({
            status: true,
            data: insert_user[0][0]
        })
        
    }
    catch(err)
    {
        console.log(err)
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
}

exports.putUpdateuUser = async function (req, res) {
    try
    {
        req.body.profile_picture = req.file.buffer.toString('base64')
        let update_user = await register_model.updateUser(req.body, req.params.user_id)
        res.status(200).json({
            status: true,
            data: update_user[0][0]
        })
        
    }
    catch(err)
    {
        res.status(400).json({
            status: false,
            message: err.message
        })
    }
}