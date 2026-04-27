import { Sequelize } from "sequelize";

const sequelize = new Sequelize("lgpd-database", "postgres", "postgres", {
  host: "127.0.0.1",
  dialect: "postgres",
  port: 5432,
  define: {
    timestamps: false,
  },
});

export default sequelize;
