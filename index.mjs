import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { listController } from "./controllers/listController.mjs";
import { createTodoController } from "./controllers/createTodoController.mjs";
import { removeTodoController } from "./controllers/removeTodoController.mjs";
import { editTodoControlller } from "./controllers/editTodoControlller.mjs";
import { registerController } from "./controllers/registerController.mjs";
import { loginController } from "./controllers/loginController.mjs";


dotenv.config();
const app = express();
const port = process.env.PORT;

const bodyParser = express.json();
const corsMiddleware = cors();

app.use(bodyParser);
app.use(corsMiddleware);
// const cache = [];
app.use(express.json()); //req, res, next bodyParser

app.get("/api/list", listController);
app.post("/api/todo", createTodoController);
app.put("/api/todo", editTodoControlller);
app.delete("/api/todo", removeTodoController);

app.post("/api/register", registerController);
app.post("/api/login", loginController);

// app.get("/hello", (req, response) => {
//   cache.push(Math.random());
//   response.json(cache)
// })
//port:3000, 8000, 8080
// pathname: "/hi", "/"

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
