import { Tasks } from "../../db/models/index.models.js";
import utils from "../../utils/index.utils.js"

export async function create_task(req, res) {
  const { title, description, status } = req.body;
  
  // validation logic
  let isEmpty = utils.common.isEmpty;
  let isString = utils.common.isString;
  let isboolean = utils.common.isBoolean;

  if (!isEmpty(res, title)) {
    return;
  }

  if (!isString(res, title, "title")) {
    return;
  }



  res.send("create task");
}

