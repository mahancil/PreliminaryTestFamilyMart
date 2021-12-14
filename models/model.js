const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Test extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Test.init({
    log_id: DataTypes.INTEGER,
    req_url: DataTypes.STRING,
    api_key: DataTypes.STRING,
    keyword: DataTypes.STRING,
    page: DataTypes.STRING,
    movie_id: DataTypes.STRING,
    created_by: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Test',
  });
  return Test;
};