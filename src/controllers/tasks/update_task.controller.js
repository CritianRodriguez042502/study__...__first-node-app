import { Tasks } from "../../db/models/index.models.js";
import utils from "../../utils/index.utils.js";

export async function update_task(req, res) {
  const { title, description, done } = req.body;
  const { id } = req.params;

  let isEmpty = utils.common.isEmpty;
  let isString = utils.common.isString;
  let isBolean = utils.common.isBoolean;

  // Detect empty values
  if (!isEmpty(res, title, "title")) {return;}
  if (!isEmpty(res, description, "description")) {return;}

  // Validate data type
  if (!isString(res, title, "title")) {return;}
  if (!isString(res, description, "description")) {return;}

  // Validate boolean
  if (!isBolean(res, done, "done")) {return;}



  const update_task = await Tasks.update(
    { title: title, description : description, status : done },
    { where: { id: id } }
  );

  let jsonResponse;

  if (update_task[0] === 1) {
    jsonResponse = {
      message: "Task updated successfully",
    };
    res.status(200).json(jsonResponse);
  } else {
    jsonResponse = {
      message: "Task not found",
    };
    res.status(404).json(jsonResponse);
  }
  
}
