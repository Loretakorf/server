import { listJSON } from "../data/list.mjs";

export const listController = (request, response) => {
response.json(listJSON);
}