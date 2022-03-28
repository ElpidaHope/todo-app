import iconSun from '../images/icon-sun.svg';
import iconMoon from '../images/icon-moon.svg';

import '../styles/TodoHeader.css';

const TodoHeader = ({isDark, setIsDark}) => {
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
        <input type="text" placeholder='Create a new todo...'/>
      </div>
    </>
  )
}

export default TodoHeader