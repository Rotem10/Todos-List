import { useEffect, useState } from 'react';

export function TodosList({
  items,
  onRemoveItem,
  onToggleItemCompleted,
  onEditTodoTitle,
}) {
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
    onRemoveItem(idToRemove);
  }

  function handleToggleItemCompleted(event) {
    const idToMark = parseInt(event.target.parentElement.parentElement.id);
    onToggleItemCompleted(idToMark, event.target.checked);
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
      onEditTodoTitle(parseInt(todoToEdit.id), event.target.value);
    }
  }
  return (
    <ul className='todo-list'>
      {items.map((item) => (
        <li
          key={item.id.toString()}
          id={item.id.toString()}
          className={item.completed ? 'completed' : ''}
          onDoubleClick={handleActiveEditMode}>
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              onChange={handleToggleItemCompleted}
              checked={item.completed}
            />
            <label>{item.title}</label>
            <button className='destroy' onClick={handleRemoveItem} />
          </div>
          <input
            className='edit'
            defaultValue={item.title}
            onKeyUp={handleDisactiveEditMode}
          />
        </li>
      ))}
    </ul>
  );
}
