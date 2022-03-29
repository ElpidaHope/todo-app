import { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

import { nanoid } from 'nanoid';

const initialState = {
  todos: [],
  completedClassName: '',
  activeClassName: ''
}

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  
  const addTodo = (content) => {
    dispatch({
      type: 'ADD_TODO',
      payload: {id:nanoid(), "content":content, "completed":false}
    })
  }

  const deleteTodo = (id) => {
    dispatch({
      type: 'DELETE_TODO',
      payload: id
    })
  }

  const handleCompleted = (id, completed) => {
    dispatch({
      type: 'COMPLETED',
      payload: [id, completed]
    })
  }

  const getAllTodo = () => {
    dispatch({
      type: 'GET_ALL_TODO',
    })
  }

  const getActiveTodo = () => {
    dispatch({
      type: 'GET_ACTIVE_TODO',
    })
  }

  const getCompletedTodo = () => {
    dispatch({
      type: 'GET_COMPLETED_TODO'
    })
  }

  const clearCompleted = () => {
    dispatch({
      type: 'CLEAR_COMPLETED'
    })
  }
  return (
    <GlobalContext.Provider value={{
      todos: state.todos,
      completedClassName: state.completedClassName,
      activeClassName: state.activeClassName,
      addTodo,
      deleteTodo,
      handleCompleted,
      clearCompleted,
      getAllTodo,
      getActiveTodo,
      getCompletedTodo
    }}>
      {children}
    </GlobalContext.Provider>
  )
}