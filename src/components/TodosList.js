import { useContext, useEffect, useState } from 'react';
import { listContext } from '../providers/list-context';

export function TodosList({}) {
  const { todos, removeTodo, toggleItemCompleted, editTodoTitle } =
    useContext(listContext);

  const [editMode, setEditMode] = useState(false);
  const [todoToEdit, setTodoToEdit] = useState(null);

  useEffect(() => {
    if (todoToEdit) {
      if (editMode) {
        todoToEdit.classList.add('editing');
      } else {
        todoToEdit.classList.remove('editing');
        setTodoToEdit(null);
      }
    }
  }, [editMode]);

  function handleRemoveItem(event) {
    const idToRemove = parseInt(event.target.parentElement.parentElement.id);
    removeTodo(idToRemove);
  }

  function handleToggleItemCompleted(event) {
    const idToMark = parseInt(event.target.parentElement.parentElement.id);
    toggleItemCompleted(idToMark, event.target.checked);
  }

  function handleActiveEditMode(event) {
    const todoItem = event.target.parentElement.parentElement;
    if (!todoToEdit) {
      setTodoToEdit(todoItem);
      setEditMode(true);
    }
  }

  function handleDisactiveEditMode(event) {
    if (event.key === 'Enter') {
      setEditMode(false);
      editTodoTitle(parseInt(todoToEdit.id), event.target.value);
    }
  }
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li
          key={todo.id.toString()}
          id={todo.id.toString()}
          className={todo.completed ? 'completed' : ''}
          onDoubleClick={handleActiveEditMode}>
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              onChange={handleToggleItemCompleted}
              checked={todo.completed}
            />
            <label>{todo.title}</label>
            <button className='destroy' onClick={handleRemoveItem} />
          </div>
          <input
            className='edit'
            defaultValue={todo.title}
            onKeyUp={handleDisactiveEditMode}
          />
        </li>
      ))}
    </ul>
  );
}
