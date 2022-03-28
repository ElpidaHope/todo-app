import Todo from "./Todo";
import ActionList from "./ActionList";

const TodoList = () => {
  const todos = [
    {
      id: 1, 
      "content": "play pes no2"
    }, 
    {
      id:2, 
      "content":"watch dine now"
    }
  ];
  return (
        <div className="todo-list">
        <div>
          {todos.map(todo => (
            <Todo todo={todo}/>
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