import { Tasks } from "../../db/models/index.models.js";

export async function get_detailed_task(req, res) {
  const { id } = req.params;

  const task_detailed = await Tasks.findByPk(id);

  let jsonResponse;

  if (task_detailed !== null) {
    jsonResponse = {
      message: "Detailed task found by id",
      data: task_detailed,
    };
    res.status(200).json(jsonResponse);
  } else {
    jsonResponse = {
      message: "task not found",
    };
    res.status(404).json(jsonResponse);
  }
}
