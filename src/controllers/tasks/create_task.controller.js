import { Tasks } from "../../db/models/index.models.js";
import utils from "../../utils/index.utils.js"

export async function create_task(req, res) {
  const { title, description, status } = req.body;
  
  // validation logic
  let isString = utils.common.isString;
  let isEmpty = utils.common.isEmpty;
  let isboolean = utils.common.isBoolean;

  if (!isEmpty(res, title)  ) {
    return;
  }


  res.send("create task");
}

