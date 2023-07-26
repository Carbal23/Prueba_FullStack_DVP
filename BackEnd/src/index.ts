import express, { Express, Request, Response, NextFunction }from "express";
import bodyparser from "body-parser";
import sequelize from "./utils/dataBase";
import userRouter from "./routes/users";

import cors from "cors";

interface ErrorResponse {
  statusCode?: number;
  message?: string;
}

const app: Express = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use((req:Request, res:Response, next:NextFunction) => {
  res.setHeader("Access-control-Allow-Origin", "*");
  res.setHeader("Access-control-Allow-Methods", "GET, POST, DELETE");
  next();
});

app.use(cors())

//text routes
app.get("/", (req:Request, res:Response, next:NextFunction) => {
  res.send("Todo esta funcionando Ok");
});

//CRUD routes
app.use("/api/user", userRouter);

//error handle
app.use((error:ErrorResponse, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  const status = error.statusCode || 500;
  const message = error.message;
  res.status(status).json({ message });
});

//sync database
sequelize
  .sync()
  .then(() => {
    console.log("database connected");
    app.listen(4000, () => {
      console.log("Server running on port 4000");
    });
  })
  .catch((err:Error) => {
    console.log(err);
  });
