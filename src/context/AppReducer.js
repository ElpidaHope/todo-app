const AppReducer = (state, action) => {
  switch(action.type) {
    default:
      return state
    
    case 'ADD_TODO':
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case 'DELETE_TODO':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== action.payload)
      }
    
    case 'CLEAR_COMPLETED':
      return {
        ...state,
        todos: state.todos.filter(todo => todo.completed === false)
      }
    case 'COMPLETED':
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id === action.payload[0]) {
            return {...todo, "completed": !action.payload[1]}
          }
          return todo
        })
      }
  
    case 'GET_ALL_TODO':
      return {
        ...state,
        completedClassName : '',
        activeClassName: ''
      }

    case 'GET_COMPLETED_TODO':
      return {
        ...state,
        completedClassName: "completed",
        activeClassName: ''
      }
    
    case 'GET_ACTIVE_TODO':
      return {
        ...state,
        activeClassName: "active",
        completedClassName: ''
      }
  }
}

export default AppReducer;