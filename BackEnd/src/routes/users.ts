import { addUser, deleteUser, getUsers,  } from "../controllers/user";
import { Router } from "express";
import {check} from "express-validator"
const router = Router();

//----------------------------CRUD ROUTES / USERS ------------------------------------------------
router.get("/", getUsers);

router.post("/",
[
    check('name','El nombre es un campo obligatorio').not().isEmpty(),
    check("name", "El nombre debe ser minimo de 5 caracteres").isLength({min: 5}),
    check("name").not().equals("doublevpartners"),
    
], addUser);

router.delete("/:userId", deleteUser);

export default router;
