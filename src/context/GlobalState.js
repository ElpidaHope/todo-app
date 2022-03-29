import { createContext, useReducer } from 'react';

import AppReducer from './AppReducer';

import { nanoid } from 'nanoid';

const initialState = {
  todos: [
    {
      id:1,
      "content": "Play Pes2019",
      "completed": false
    },
    {
      id:2,
      "content": "Watch Dune 2021",
      "completed": false
    },
  ],

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
      type: 'GET_ALL_TODO'
    })
  }

  const getActiveTodo = () => {
    dispatch({
      type: 'GET_ACTIVE_TODO',
      // payload: completed
    })
  }

  const getCompletedTodo = () => {
    dispatch({
      type: 'GET_COMPLETED_TODO'
    })
  }
  return (
    <GlobalContext.Provider value={{
      todos: state.todos,
      addTodo,
      deleteTodo,
      handleCompleted,
      getAllTodo,
      getActiveTodo,
      getCompletedTodo
    }}>
      {children}
    </GlobalContext.Provider>
  )
}