import { Home } from "./home.controller.js";
import {
  read_tasks,
  read_task_detail,
  create_task,
  delete_task,
  update_task,
} from "./tasks.controller.js";

// export default controllers
export default {
  // controllers
  home: Home,

  // Tasks functions
  tasks: {
    read_tasks,
    read_task_detail,
    create_task,
    delete_task,
    update_task,
  },
};
