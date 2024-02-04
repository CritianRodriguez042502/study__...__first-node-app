import { Tasks } from "../../db/models/index.models.js";

export async function get_tasks(req, res) {
  const tasks = await Tasks.findAll();
  const jsonResponse = {
    message: "All tasks in my database",
    data: tasks,
  };
  res.status(200).json(jsonResponse);
}
