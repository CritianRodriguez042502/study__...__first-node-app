import { Tasks } from "../../db/models/index.models.js";
import utils from "../../utils/index.utils.js";

export async function create_task(req, res) {
  const { title, description, done } = req.body;

  // validation logic
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

  const newTask = await Tasks.create({
    title,
    description,
    done,
  });

  const jsonResponse = {
    message: "Task created successfully",
    data: newTask,
  };

  res.status(201).json(jsonResponse);
}
