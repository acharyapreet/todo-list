import { useReducer, useState } from 'react';
import AddTodo from './components/AddTodo/AddTodo'
import TodoContext from './context/TodoContext';
import TodoList from './components/TodoList/TodoList'
import todoReducers from './reducers/todoReducers';
import TodoDispatchContext from './context/todoDispatchContext';
function App() {
// const [list, setList] = useState([
//   { id : 1, todoData : 'todo 1', finished: false},
//   { id : 2, todoData : 'todo 2', finished: false},
// ]); 
const [list, dispatch] = useReducer(todoReducers, []);
 return (
  
    <TodoContext.Provider value={{list}}>
      <TodoDispatchContext.Provider value = {{dispatch}}>
      <AddTodo/>
      <TodoList/>
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  )
}
export default App
