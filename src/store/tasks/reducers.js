import { createReducer, createSlice } from "@reduxjs/toolkit";
import {
  ADD_TASK,
  DELETE_TASK,
  STATUS_TASK,
  EDIT_TASK,
  SAVE_EDIT_TASK,
  SEARCH_TASK,
} from "./actionsTypes";
import {
  fetchTasks,
  statusTask,
  addTask,
  deletedTask,
  saveEditTask,
} from "./actions";

const initialState = {
  todos: [],
  filteredTasks: [],
  searchValue: "",
};

const tasksReducer = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    setTaskEditMode: (state, action) => {
      const { id, isEdit } = action.payload;
      state.todos = state.todos.map((task) =>
        task.id === id ? { ...task, isEdit } : task
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.todos = action.payload; 
      })
      .addCase(statusTask.fulfilled, (state, action) => {
        const updatedTask = action.payload;
        state.todos = state.todos.map((task) =>
          task.id === updatedTask.id ? updatedTask : task
        );
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.todos.push({
          id: action.payload.id,
          title: action.payload.title,
          isCompleted: false,
          isEdit: false,
          userId: action.payload.userId,
        });
      })
      .addCase(deletedTask.fulfilled, (state, action) => {
        const deleted = action.payload;
        state.todos = state.todos.filter((task) => task.id !== +deleted.id);
      })
      .addCase(setTaskEditMode, (state, action) => {
        const { id, isEdit } = action.payload;
        state.todos = state.todos.map((task) =>
          task.id === id ? { ...task, isEdit } : task
        );
      })
      .addCase(saveEditTask.fulfilled, (state, action) => {
        const taskEdit = action.payload;
        console.log(taskEdit);
        state.todos = state.todos.map((task) => {
          return task.id === taskEdit.id
            ? { ...task, title: taskEdit.title, isEdit: false }
            : task;
        });
      });
  },
});



export const { setTaskEditMode } = tasksReducer.actions;
export default tasksReducer.reducer;

//     .addCase(EDIT_TASK, (state, action) => {
//       state.todos = state.todos.map((task) => {
//         if (task.id === action.payload) {
//           return {
//             ...task,
//             isEdit: !task.isEdit,
//           };
//         }
//         return task;
//       });
//     })

//     .addCase(SAVE_EDIT_TASK, (state, action) => {
//       state.todos = state.todos.map((task) =>
//         task.id === action.payload.id
//           ? { ...task, title: action.payload.newTitle, isEdit: false }
//           : task
//       );
//     })

// builder
//     .addCase(ADD_TASK, (state, action) => {
//       state.todos.push({
//         id: Date.now(),
//         title: action.payload,
//         isCompleted: false,
//         isEdit: false,
//       });
//     })

// const todosReducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(ADD_TASK, (state, action) => {
//       state.todos.push({
//         id: Date.now(),
//         title: action.payload,
//         isCompleted: false,
//         isEdit: false,
//       });
//     })
//     .addCase(DELETE_TASK, (state, action) => {
//       state.todos = state.todos.filter((task) => task.id !== action.payload);
//     })
//     .addCase(STATUS_TASK, (state, action) => {
//       state.todos = state.todos.map((task) => {
//         if (task.id === action.payload) {
//           return {
//             ...task,
//             isCompleted: !task.isCompleted,
//           };
//         }
//         return task;
//       });
//     })
//     .addCase(EDIT_TASK, (state, action) => {
//       state.todos = state.todos.map((task) => {
//         if (task.id === action.payload) {
//           return {
//             ...task,
//             isEdit: !task.isEdit,
//           };
//         }
//         return task;
//       });
//     })
//
//     .addCase(SEARCH_TASK, (state, action) => {
//       state.searchValue = action.payload;
//       if (action.payload !== "") {
//         state.filteredTasks = state.todos.filter((task) =>
//           task.title.toLowerCase().includes(action.payload.toLowerCase())
//         );
//       } else {
//         state.filteredTasks = state.todos;
//       }
//     });
// });
