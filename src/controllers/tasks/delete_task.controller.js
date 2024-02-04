import { Tasks } from "../../db/models/index.models.js";

export async function delete_task(req, res) {
  const { id } = req.params;

  const delete_task = await Tasks.destroy({
    where: {
      id: id,
    },
  });

  let jsonResponse;

  if (delete_task[0] === 1) {
    jsonResponse = {
      message: "task deleted successfully",
    };
    res.status(200).json(jsonResponse);
  } else {
    jsonResponse = {
      message: "task not found",
    };
    res.status(404).json(jsonResponse);
  }
}
