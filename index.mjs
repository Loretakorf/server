import express from "express";
import { listController } from "./controllers/listController.mjs"
import { createTodoController } from "./controllers/createTodoController.mjs";
import { removeTodoController } from "./controllers/removeTodoController.mjs";
const app = express();

// const cache = [];
app.use(express.json()); //req, res, next bodyParser 

app.get("/api/list", listController);
app.post("/api/todo", createTodoController);
app.delete("/api/todo", removeTodoController)
  

// app.get("/hello", (req, response) => {
//   cache.push(Math.random());
//   response.json(cache)
// })
//port:3000, 8000, 8080
// pathname: "/hi", "/"

app.listen(3000, () => {
  console.log(`Example app listening on port ${3000}`);
});
