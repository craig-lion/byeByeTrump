const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize({ dialect: "postgres" });

module.exports = (callback) => {

  sequelize
    .sync()
    .then(() => {
      console.log("Database connection established.");

      const City = sequelize.define("city", {
        city: Sequelize.STRING,
        city_ascii: Sequelize.STRING,
        lat: Sequelize.STRING,
        lng: Sequelize.STRING,
        country: Sequelize.STRING,
        so2: Sequelize.STRING,
        iso3: Sequelize.STRING,
        admin_name: Sequelize.STRING,
        cap: Sequelize.STRING,
        pop: Sequelize.STRING,
        id: {
          type: DataTypes.STRING,
          primaryKey: true
        },
      });


      City.findAll({
        attributes: ["lat", "lng", "city", "country"],
        // where: { city: { [Op.iLike]: `%${q}%` } },
        // limit: 5,
      })
        .then((res) => callback(res) )
        // .then(console.log("this is results[0]", results[0]))
        .catch((err) => console.log("this is err", err));
    })
    .catch((err) => {
      console.error(`Unable to connect to the database: ${err}`);
    });
};
