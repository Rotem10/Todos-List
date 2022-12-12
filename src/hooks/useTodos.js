import { useEffect, useState } from 'react';

export function useTodos() {
  const [todos, setTodos] = useState([]);
  const [noneCompletedItemsCount, setNoneCompletedItemsCount] = useState(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then((response) => response.json())
      .then((todos) => setTodos(todos.slice(0, 10)));
  }, []);

  useEffect(() => {
    const uncompleted = todos.filter((todo) => !todo.completed);
    setNoneCompletedItemsCount(uncompleted.length);
  }, [todos]);

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

  return {
    todos,
    addTodo,
    removeTodo,
    toggleItemCompleted,
    clearAllCompletedItems,
    toggleAllItems,
    editTodoTitle,
    noneCompletedItemsCount,
  };
}
