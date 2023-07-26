"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const dataBase_1 = __importDefault(require("../utils/dataBase"));
const User = dataBase_1.default.define("user", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: sequelize_1.DataTypes.STRING,
    idGH: sequelize_1.DataTypes.INTEGER,
    avatar: sequelize_1.DataTypes.STRING,
    urlGH: sequelize_1.DataTypes.STRING,
    repos: sequelize_1.DataTypes.INTEGER,
    gists: sequelize_1.DataTypes.INTEGER,
    follower: sequelize_1.DataTypes.INTEGER,
    following: sequelize_1.DataTypes.INTEGER,
});
exports.default = User;
