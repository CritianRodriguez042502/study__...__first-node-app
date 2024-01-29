// import users controllers
import { home } from "./users/home.controller.js";

// import tasks controllers
import { get_tasks } from "./tasks/get_tasks.controller.js";
import { get_detailed_task } from "./tasks/get_detailed_task.controller.js";
import { create_task } from "./tasks/create_task.controller.js";
import { update_task } from "./tasks/update_task.controller.js";
import { delete_task } from "./tasks/delete_task.controller.js";

// export default controllers
export default {
  // Users functions
  users: {
    home,
  },
  
  // Tasks functions
  tasks: {
    get_tasks,
    get_detailed_task,
    create_task,
    delete_task,
    update_task,
  },
};
