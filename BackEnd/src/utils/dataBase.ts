import {Sequelize, Dialect} from "sequelize";
import dotenv from 'dotenv';
dotenv.config();

interface DatabaseConfig {
  username: string;
  password: string;
  database: string;
  host: string;
  dialect: Dialect;
}

const databaseConfig: DatabaseConfig = {
  username: process.env.PG_USER as string,
  password: process.env.PG_PASSWORD as string,
  database: process.env.PG_DB as string,
  host: process.env.PG_HOST as string,
  dialect: "postgres",
};

const sequelize = new Sequelize(databaseConfig);

export default sequelize as Sequelize;
