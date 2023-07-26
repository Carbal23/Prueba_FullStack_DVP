"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.addUser = exports.getUsers = void 0;
const express_validator_1 = require("express-validator");
const users_1 = __importDefault(require("../models/users"));
//-----------------------------CRUD CONTROLLER-----------------------------------------------------
//get all user
const getUsers = (req, res) => {
    users_1.default.findAll({
        order: [['createdAt', 'DESC']], // Ordenar por el campo createdAt de forma descendente (más reciente a más antiguo)
    })
        .then((users) => {
        res.status(200).json({ users: users });
    })
        .catch((err) => {
        console.error(err);
        res.status(500).json({ error: "Error interno" });
    });
};
exports.getUsers = getUsers;
//add favoriteList-User
const addUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    //verificamos si no hay errores de validacion con express validation
    const errores = (0, express_validator_1.validationResult)(req);
    if (!errores.isEmpty()) {
        return res.status(400).json({ errores: errores.array() });
    }
    ;
    const { name, idGH, avatar, urlGH, repos, gists, follower, following } = req.body;
    // Buscar si ya existe un usuario con el mismo idGH (id proporcionado por github)
    const existingUser = yield users_1.default.findOne({ where: { idGH } });
    if (existingUser) {
        // Si ya existe un usuario con el mismo idGH, retornar un mensaje de error
        return res.status(409).json({ message: "User already exists in the favorite list" });
    }
    //creamos y agregamos el ususario a la base de datos
    const userData = {
        name,
        idGH,
        avatar,
        urlGH,
        repos,
        gists,
        follower,
        following,
    };
    users_1.default.create(userData)
        .then((result) => {
        console.log("Add user to favoritList");
        res.status(201).json({
            message: "user add to favorilist successfully",
            user: result,
        });
    })
        .catch((err) => {
        console.error("hubo un error", err);
        res.status(400).json({ error: "hubo un error" });
    });
});
exports.addUser = addUser;
//Delete user
const deleteUser = (req, res) => {
    const userId = req.params.userId;
    users_1.default.findByPk(userId)
        .then((user) => {
        if (!user) {
            return res.status(404).json({ message: "user not found" });
        }
        return users_1.default.destroy({
            where: {
                id: userId,
            },
        });
    })
        .then(() => {
        res.status(200).json({ message: "user delete successfully" });
    })
        .catch((err) => {
        console.error("hubo un error", err);
        res.status(400).json({ error: "hubo un error" });
    });
};
exports.deleteUser = deleteUser;
