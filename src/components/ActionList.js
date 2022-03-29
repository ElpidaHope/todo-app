import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const ActionList = () => {
  const { getCompletedTodo, getAllTodo } = useContext(GlobalContext);
  return (
    <div className='action-list'>
      <p className='active' onClick={() => getAllTodo()}>All</p>
      <p>Active</p>
      <p onClick={() => getCompletedTodo()}>Completed</p>
    </div>
  )
}

export default ActionList