import { listJSON } from "../data/list.mjs";

export const editTodoControlller = (req, res) => {
  const { documents } = listJSON;
  // const requestedEditId = req.body._id;

  const { _id, title, description, completed } = req.body;

  const isIdValid = typeof _id === "string"
  const isTitleValid = typeof title === "string" && title.length > 5;
  const isDescriptionValid =
    typeof description === "string" && description.length > 5;
  const isCompletedValid = typeof completed === "boolean";

  if (!isTitleValid || !isDescriptionValid || !isCompletedValid || !isIdValid) {
    res.status(400).json({
      message: "Blogi duomenys",
    });
    return;
  }
  // const index = documents.find(({ _id }) => _id === requestedEditId);
  // if (index === -1) {
  //   res.json({
  //     matchedCount: 1,
  //     modifiedCount: 1,
  //   });
  //   return;
  // }
  // documents[i] = req.body;
  let replacedCount = 0;
  for (let i = 0; i < documents.length; i++) {
    const todo = documents[i];

    if (todo._id !== _id) continue;
    documents[i] = req.body;
    replacedCount++;
  }

  res.json({
    matchedCount: replacedCount,
    modifiedCount: replacedCount,
  });
};
