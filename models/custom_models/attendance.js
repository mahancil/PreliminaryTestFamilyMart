var model = require('../index');

exports.insertAttendance = async function (params, coords) {
    insert_attendance = await model.sequelize.query("INSERT INTO public.r_attendance(attendance_id, user_id, start_time, end_time, longitude, latitude, country, city, created_date)VALUES(gen_random_uuid(), ?, now(), '00:00:00', ?, ?, ?, ?, now()) returning *;", {
        replacements:[params, coords.longitude, coords.latitude, coords.country, coords.city],
        type: model.sequelize.QueryTypes.INSERT,
        quoteIdentifiers: true})

        return insert_attendance
}

exports.getAttendance = async function (params) {
    get_attendance = await model.sequelize.query("SELECT attendance_id, user_id, start_time, end_time, longitude, latitude, country, city FROM public.r_attendance where user_id = :user_id;", {
        replacements:{user_id: params},
        type: model.sequelize.QueryTypes.SELECT,
        quoteIdentifiers: true})

        return get_attendance
}

exports.updateAttendance = async function (params) {
    update_attendance = await model.sequelize.query("UPDATE public.r_attendance SET end_time= now() WHERE user_id = ? returning *;", {
        replacements:[params],
        type: model.sequelize.QueryTypes.UPDATE,
        quoteIdentifiers: true})

        return update_attendance
}