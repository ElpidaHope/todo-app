import { useState } from 'react';

import BgImage from './components/BgImage';
import TodoHeader from './components/TodoHeader';
import TodoList from './components/TodoList';
import ActionList from './components/ActionList';

import './App.css';

function App() {
  const [isDark, setIsDark] = useState(false)
  return (
    <div className={`app ${isDark ? `dark` : null}`}>
      <BgImage isDark={isDark}/>
      <div className='container'>
        <TodoHeader setIsDark={setIsDark} isDark={isDark}/>
        <div>
          <TodoList />
        </div>
        <ActionList />
        <p>Drag and drop to reorder list</p>
      </div>
    </div>
  );
}

export default App;
