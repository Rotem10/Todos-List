import './App.css';
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';

function App() {
  const appTitle = 'Todos';
  let key = 2;
  let todos = [
    { key: '0', title: 'Learn React', completed: false },
    { key: '1', title: 'Listen to Nir', completed: false },
    { key: '2', title: 'Learn JS', completed: true },
  ];

  const addTodo = (title) => {
    todos.push({ key: (key + 1).toString(), title, completed: false });
    key++;
    console.log(todos);
  };

  const removeTodo = (key) => {
    let newTodos = [];
    todos.forEach((todo) => {
      if (todo.key !== key) {
        newTodos.push(todo);
      }
    });
    todos = newTodos;
    console.log(todos);
  };

  const updateItemsLeft = () => {
    let itemsLeft = 0;
    todos.forEach((todo) => {
      if (!todo.completed) {
        itemsLeft++;
      }
    });
    return itemsLeft;
  };

  const toggleCompleted = (key) => {
    let todoToUpdate = todos.find((todo) => todo.key === key);
    todoToUpdate.completed = !todoToUpdate.completed;
    console.log(todos);
  };

  const clearCompleted = () => {
    let todosToClear = todos.filter((todo) => todo.completed);
    todosToClear.forEach((todo) => removeTodo(todo.key));
    console.log(todos);
  };

  const toggleCompletedAll = (isCompleted) => {
    todos.forEach((todo) => (todo.completed = isCompleted));
    console.log(todos);
  };

  return (
    <section className='todoapp'>
      <Header
        title={appTitle}
        text='What needs to be done?'
        onAddItem={addTodo}
      />
      <Main
        todos={todos}
        onRemoveItem={removeTodo}
        onToggleCompleted={toggleCompleted}
        toggleAll={toggleCompletedAll}
      />
      <Footer itemsLeft={updateItemsLeft()} onClearCompleted={clearCompleted} />
    </section>
  );
}

export default App;
