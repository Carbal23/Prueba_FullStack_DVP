import { Request, Response } from "express";
import { validationResult, ValidationError } from "express-validator";
import User from "../models/users";
import {  CreateUserRequestBody,  DeleteUserResponse, GetUserResponse, IUser} from "./IUser";

interface AddUserResponse {
  message?: string;
  user?: IUser; 
  error?: string;
  errores?: ValidationError[];

}

//-----------------------------CRUD CONTROLLER-----------------------------------------------------

//get all user
export const getUsers = (req: Request, res: Response<GetUserResponse>) => {
  User.findAll({
    order: [['createdAt', 'DESC']], // Ordenar por el campo createdAt de forma descendente (más reciente a más antiguo)
  })
    .then((users) => {
      res.status(200).json({ users: users });
    })
    .catch((err: Error) => {
      console.error(err);
      res.status(500).json({error: "Error interno"});
    });
};

//add favoriteList-User
export const addUser = async (req: Request<{}, {}, CreateUserRequestBody>, res: Response<AddUserResponse>) => {

//verificamos si no hay errores de validacion con express validation
  const errores = validationResult(req);
  if (!errores.isEmpty()) {
    return res.status(400).json({ errores: errores.array() });
  };

  const { 
    name, 
    idGH, 
    avatar, 
    urlGH, 
    repos, 
    gists, 
    follower, 
    following } = req.body;

  // Buscar si ya existe un usuario con el mismo idGH (id proporcionado por github)
  const existingUser = await User.findOne({ where: { idGH } });

  if (existingUser) {
    // Si ya existe un usuario con el mismo idGH, retornar un mensaje de error
    return res.status(409).json({ message: "User already exists in the favorite list" });
  }

  //creamos y agregamos el ususario a la base de datos
  const userData: IUser = {
    name,
    idGH,
    avatar,
    urlGH,
    repos,
    gists,
    follower,
    following,
  };

  User.create(userData)
    .then((result) => {
      console.log("Add user to favoritList");
      res.status(201).json({
        message: "user add to favorilist successfully",
        user: result,
      });
    })
    .catch((err: Error) => {
      console.error("hubo un error", err);
      res.status(400).json( {error : "hubo un error"} );
    });
};

//Delete user
export const deleteUser = (req: Request, res: Response<DeleteUserResponse>) => {
  const userId = req.params.userId;
  User.findByPk(userId)
    .then((user):any=> {
      if (!user) {
        return res.status(404).json({ message: "user not found" });
      }
      return User.destroy({
        where: {
          id: userId,
        },
      });
    })
    .then(() => {
      res.status(200).json({ message: "user delete successfully" });
    })
    .catch((err:Error) => {
      console.error("hubo un error", err);
      res.status(400).json({ error: "hubo un error"});
    });
};
