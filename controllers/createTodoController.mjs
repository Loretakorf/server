import { listJSON } from "../data/list.mjs";
import { v4 as createId } from "uuid";

export const createTodoController = (req, res) => {
  const id = createId();
  console.log(id);
  
  const { title, description, completed } = req.body;
  const isTitleValid = typeof title === "string" && title.length > 5;
  const isDescriptionValid =
    typeof description === "string" && description.length > 5;
  const isCompletedValid = typeof completed === "boolean";

  if (!isTitleValid || !isDescriptionValid || !isCompletedValid) {
    res.status(400).json({
      message: "Blogi duomenys",
    });
    return;
  }

  const todo = {
    _id: id,
    title,
    description,
    completed,
    // ...req.body,
  };
  listJSON.documents.push(todo);

  res.json({
    insertedId: id,
    // insertedData: todo
  });
};
