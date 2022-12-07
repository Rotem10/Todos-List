export function TodosList({ items, onRemoveItem, onToggleItemCompleted }) {
  function handleRemoveItem(event) {
    const idToRemove = parseInt(event.target.parentElement.parentElement.id);
    onRemoveItem(idToRemove);
  }

  function handleToggleItemCompleted(event) {
    const idToMark = parseInt(event.target.parentElement.parentElement.id);
    onToggleItemCompleted(idToMark, event.target.checked);
  }
  return (
    <ul className='todo-list'>
      {items.map((item) => (
        <li
          key={item.id.toString()}
          id={item.id.toString()}
          className={item.completed ? 'completed' : ''}>
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
          <input className='edit' />
        </li>
      ))}
    </ul>
  );
}
