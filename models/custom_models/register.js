var model = require('../index');

exports.getUserById = async function (user_id) {
    let get_user_by_id = await model.sequelize.query("select * from m_user where user_id = :user_id;", {
        replacements:{user_id: user_id},
        type: model.sequelize.QueryTypes.SELECT,
        quoteIdentifiers: true})

        return get_user_by_id
}

exports.insertUser = async function (params) {
    let insert_user = await model.sequelize.query("INSERT INTO public.m_user(user_id, fullname, username, password, email, profile_picture, position_id)VALUES(gen_random_uuid(), ?, ?, ?, ?, ?, ?) returning user_id, fullname, username;", {
        replacements:[params.fullname, params.username, params.password, params.email, params.profile_picture, params.position_id],
        type: model.sequelize.QueryTypes.INSERT,
        quoteIdentifiers: true})

        return insert_user
}

exports.updateUser = async function (params, user_id) {
    let update_user = await model.sequelize.query("UPDATE public.m_user SET fullname= ?, username= ?, email= ?, profile_picture= ?, position_id= ? WHERE user_id= ? returning user_id, fullname, username;", {
        replacements:[params.fullname, params.username, params.email, params.profile_picture, params.position_id, user_id],
        type: model.sequelize.QueryTypes.UPDATE,
        quoteIdentifiers: true})

        return update_user
}