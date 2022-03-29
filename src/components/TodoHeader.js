import { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';

import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';

import '../styles/TodoHeader.css';

const TodoHeader = ({isDark, setIsDark}) => {
  const [newTodo, setNewTodo] = useState('')
  const { addTodo } = useContext(GlobalContext)
  
  return (
    <>
      <div className="theme-changer">
        <h1>Todo</h1>
        <img src={isDark ? iconSun : iconMoon} alt="" onClick={() => setIsDark(prop => !prop)}/>
      </div>
      <div className='new-todo'>
        <div className="round-checkbox">
          <input type="checkbox"/>
          <label htmlFor="checkbox"></label>
        </div>
        <input 
          type="text" 
          placeholder='Create a new todo...' 
          value={newTodo} 
          onChange={e => setNewTodo(e.target.value)}
          onKeyPress={e => {
            if (e.key === 'Enter' && newTodo.length > 0) {
              addTodo(newTodo)
              setNewTodo('')
            }
          }}
          />
      </div>
    </>
  )
}

export default TodoHeader