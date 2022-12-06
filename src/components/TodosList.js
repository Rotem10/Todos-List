export function TodosList({ todos, onRemoveItem, onToggleCompleted }) {
  function handleRemove(event) {
    onRemoveItem(event.target.parentElement.parentElement.id);
    console.log(event.target.parentElement.parentElement.id);
  }

  function handleCompleted(event) {
    onToggleCompleted(event.target.parentElement.parentElement.id);
  }
  return (
    <ul className='todo-list'>
      {todos.map((todo) => (
        <li key={todo.key} id={todo.key}>
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              onChange={handleCompleted}
            />
            <label>{todo.title}</label>
            <button className='destroy' onClick={handleRemove} />
          </div>
          <input className='edit' />
        </li>
      ))}
    </ul>
  );
}
