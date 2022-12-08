import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
import { TodosList } from './components/TodosList';
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
    setNoneCompletedItemsCount(uncompleted.length);
  }, [todos]);

  const appTitle = 'Todos';

  const addTodo = (title) => {
    const newTodos = todos.concat([
      { id: Date.now(), title, completed: false },
    ]);
    setTodos(newTodos);
  };

  const removeTodo = (idToRemove) => {
    const newTodos = todos.filter((todo) => {
      if (todo.id !== idToRemove) {
        return todo;
      }
    });
    setTodos(newTodos);
  };

  // const markAsCompleted = () => {};

  const toggleItemCompleted = (idToMark, checkedValue) => {
    const indexOfTodoToMark = todos.map((todo) => todo.id).indexOf(idToMark);
    const newTodos = [...todos];
    newTodos[indexOfTodoToMark].completed = checkedValue;
    setTodos(newTodos);
  };

  const clearAllCompletedItems = () => {
    const newTodos = todos.filter((todo) => !todo.completed);
    setTodos(newTodos);
  };

  const toggleAllItems = (checkedValue) => {
    const newTodos = todos.map((todo) => {
      todo.completed = checkedValue;
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <section className='todoapp'>
      <Header
        title={appTitle}
        text='What needs to be done?'
        onAddItem={addTodo}
      />
      <Main onToggleAllItems={toggleAllItems}>
        <TodosList
          items={todos}
          onRemoveItem={removeTodo}
          onToggleItemCompleted={toggleItemCompleted}
        />
      </Main>
      <Footer
        itemLeftCount={noneCompletedItemsCount}
        onClearCompleted={clearAllCompletedItems}
      />
    </section>
  );
}

export default App;
