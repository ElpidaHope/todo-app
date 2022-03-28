import iconClose from '../images/icon-cross.svg';

import '../styles/Todo.css';

const Todo = ({todo}) => {
   return (
    <div className='todo' 
        onMouseOver={e => e.target.lastElementChild.classList.add('show-delete')}
        onMouseOut={e => e.target.lastElementChild.classList.remove('show-delete')}>
        <div className="round-checkbox">
          <input type="checkbox" id={todo.id}/>
          <label htmlFor={todo.id}></label>
        </div>
        <p>{todo.content}</p>
        <img src={iconClose} alt="" className='delete-todo'/>
    </div>
  )
}

export default Todo;