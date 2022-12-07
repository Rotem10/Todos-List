import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { useEffect, useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then(setTodos);
  }, []);

  useEffect(() => {
    const uncompleted = todos.filter((todo) => !todo.completed);
    setNoneCompletedItemsCount(uncompleted);
  }, [todos]);

  const appTitle = 'Todos';

  const addTodo = (title) => {
    const newTodos = todos.concat([{ id: Date.now, title, completed: false }]);
    setTodos(newTodos);
  };

  const removeTodo = (idToRemove) => {
    const newTodos = todos.filter((todo) => todo.id !== idToRemove);
    setTodos(newTodos);
  };

  const markAsCompleted = (idToMark) => {};

  const clearAllCompletedItems = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const toggleAllItems = (checkedValue) => {
    const newTodos = todos.map((todo) => ({
      ...todo,
      completed: checkedValue,
    }));
    setTodos(newTodos);
  };

  return (
    <section className='todoapp'>
      <Header
        title={appTitle}
        text='What needs to be done?'
        onAddItem={addTodo}
      />
      <Main
        items={todos}
        onRemoveItem={removeTodo}
        onMarkAsCompleted={markAsCompleted}
        onToggleAllItems={toggleAllItems}
      />
      <Footer
        itemLeftCount={noneCompletedItemsCount}
        onClearCompleted={clearAllCompletedItems}
      />
    </section>
  );
}

export default App;
