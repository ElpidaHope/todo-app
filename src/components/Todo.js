import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

import iconClose from '../images/icon-cross.svg';

import '../styles/Todo.css';

const Todo = ({todo}) => {
  const { deleteTodo, handleCompleted, completedClassName, activeClassName } = useContext(GlobalContext);
   return (
    <div 
      className={`todo ${!todo.completed ? completedClassName : ''} ${todo.completed ? activeClassName : ''}`} 
      onMouseOver={e => {if (e.target.lastElementChild) {e.target.lastElementChild.classList.add('show-delete')}}}
      onMouseOut={e => {if (e.target.lastElementChild) {e.target.lastElementChild.classList.remove('show-delete')}}}>
        <div className="round-checkbox">
          <input type="checkbox" id={todo.id} checked={todo.completed} onChange={() => handleCompleted(todo.id, todo.completed)}/>
          <label htmlFor={todo.id}></label>
        </div>
        <p className={todo.completed ? 'checked' : null}>{todo.content}</p>
        <img 
          src={iconClose} 
          alt="" 
          className='delete-todo' 
          onClick={() => deleteTodo(todo.id)}/>
    </div>
  )
}

export default Todo;