var attendance_model = require('../models/custom_models/attendance');
var multer  = require('multer');
var sha256 = require('js-sha256');
const publicIp = require('public-ip');
const iplocate = require('node-iplocate');
var storage = multer.memoryStorage()
var upload_multer = multer({ storage: storage })
module.exports.multer_option = upload_multer.single('profile_picture')

exports.commitAttendance = async function (req, res) {
    try
    {
        let get_attendance = await attendance_model.getAttendance(req.params.user_id)
        if(!get_attendance.length)
        {
            let ip = await publicIp.v4()
            let coords = await iplocate(ip)
            let insert_attendance = await attendance_model.insertAttendance(req.params.user_id, coords)
            res.status(200).json({
                status: true,
                message: 'Attendance at '+insert_attendance[0][0].start_time
            })
        }
        else
        {
            let update_attendance = await attendance_model.updateAttendance(req.params.user_id)
            res.status(200).json({
                status: true,
                message: 'Checkout at '+update_attendance[0][0].end_time
            })
        }
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
