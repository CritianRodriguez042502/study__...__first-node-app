import { Tasks } from "../../db/models/index.models.js";

export async function create_task(req, res) {
  const { title, description, status } = req.body;
  
  // create task
  let jsonResponse;
  try {
    const newTask = await Tasks.create({
      title,
      description,
      status,
    });

    jsonResponse = {
      message: "The task has been created correctly",
      status: 201,
      data: newTask,
    };
    return res.status(201).send(jsonResponse);
  } catch (error) {
    jsonResponse = {
      message: "Error creating the task",
      status: 500,
      error: error.message,
    };
    console.error(error);
    return res.status(500).send(jsonResponse);
  }
}

