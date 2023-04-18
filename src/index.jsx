import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./Styles/TodoApp.css";
import "./Styles/TodoForm.css";
import "./Styles/TodoStats.css";
import "./Styles/TodoList.css";
import "./Styles/TodoFilters.css";
import "./Styles/Todo.css";

import TodoApp from "./TodoApp";

const root = createRoot(document.getElementById("root"));
root.render(
    <StrictMode>
        <TodoApp />
    </StrictMode>
);