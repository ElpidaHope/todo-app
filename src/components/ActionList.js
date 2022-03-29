import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ActionList = () => {
  const { getCompletedTodo, getAllTodo, getActiveTodo } = useContext(GlobalContext);
  const actionList = document.querySelectorAll('.action-list p')
  const removeClassName = () => {
    actionList.forEach(action => {
      action.classList.remove('active')
    })
  }

  
  return (
    <div className='action-list'>
      <p 
        className='active' 
        onClick={e => {
          removeClassName()
          e.target.classList.add('active')
          getAllTodo()}}
          >All
      </p>
      <p 
        onClick={e => {
          removeClassName()
          e.target.classList.add('active')
          getActiveTodo()}}>Active</p>
      <p 
        onClick={e => {
        removeClassName()
        e.target.classList.add('active')
        getCompletedTodo()}}>Completed</p>
    </div>
  )
}

export default ActionList