import { Model, DataTypes } from "sequelize";
import db from "../utils/dataBase";

interface UserAttributes {
  id?: number;
  name: string;
  idGH: number;
  avatar: string;
  urlGH: string;
  repos: number;
  gists: number;
  follower: number;
  following: number;
}

interface UserModel extends Model<UserAttributes>, UserAttributes {}

const User = db.define<UserModel>("user", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  idGH: DataTypes.INTEGER,
  avatar: DataTypes.STRING,
  urlGH: DataTypes.STRING,
  repos: DataTypes.INTEGER,
  gists: DataTypes.INTEGER,
  follower: DataTypes.INTEGER,
  following: DataTypes.INTEGER,
});

export default User;

