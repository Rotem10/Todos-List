import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/Header';
import { ToggleAll } from './components/ToggleAll';
import { Footer } from './components/Footer';
import { TodosList } from './components/TodosList';

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

  const editTodoTitle = (idToEdit, newTitle) => {
    const indexOfTodoToEdit = todos.map((todo) => todo.id).indexOf(idToEdit);
    const newTodos = [...todos];
    newTodos[indexOfTodoToEdit].title = newTitle;
    setTodos(newTodos);
  };

  return (
    <section className='todoapp'>
      <Header
        title={appTitle}
        text='What needs to be done?'
        onAddItem={addTodo}
      />
      <ToggleAll onToggleAllItems={toggleAllItems}>
        <TodosList
          items={todos}
          onRemoveItem={removeTodo}
          onToggleItemCompleted={toggleItemCompleted}
          onEditTodoTitle={editTodoTitle}
        />
      </ToggleAll>
      <Footer
        itemLeftCount={noneCompletedItemsCount}
        onClearCompleted={clearAllCompletedItems}
      />
    </section>
  );
}

export default App;
