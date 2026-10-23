import { Sequelize } from "sequelize";

const sequelize = new Sequelize("api_notas_clase", "campus2023", "campus2023", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

export default sequelize;
