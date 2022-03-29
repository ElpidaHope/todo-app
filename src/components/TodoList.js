import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

import Todo from "./Todo";
import ActionList from "./ActionList";

const TodoList = () => {
  const { todos, clearCompleted } = useContext(GlobalContext);
  console.log()
  return (
        <div className="todo-list">
          <div>
            {todos.map(todo => (
              <Todo todo={todo} key={todo.id}/>
            ))}
          </div>
          <div className="todo-list-footer">
            <p>{todos.filter(todo => todo.completed === false).length} items left</p>
            <div id="display-action-list">
              <ActionList />
            </div>
            <p onClick={() => clearCompleted()}>Clear Completed</p>
          </div>
        </div>
    )
    
}

export default TodoList;