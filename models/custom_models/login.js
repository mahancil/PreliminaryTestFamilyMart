var model = require('../index');

exports.getUserLogin = async function (username, password) {
    insert_log = await model.sequelize.query("select * from m_user where username = :username;", {
        replacements:{username: username, password: password},
        type: model.sequelize.QueryTypes.SELECT,
        quoteIdentifiers: true})

        return insert_log
}