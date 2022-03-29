import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import Todo from "./Todo";
import ActionList from "./ActionList";

const TodoList = () => {
  const { todos } = useContext(GlobalContext)
  return (
        <div className="todo-list">
          <div>
            {todos.map(todo => (
              <Todo todo={todo} key={todo.id}/>
            ))}
          </div>
          <div className="todo-list-footer">
            <p>5 items left</p>
            <div id="display-action-list">
              <ActionList />
            </div>
            <p>Clear Completed</p>
          </div>
        </div>
    )
    
}

export default TodoList;