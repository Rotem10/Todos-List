export function TodosList({ items, onRemoveItem, onMarkAsCompleted }) {
  function handleRemoveItem(event) {
    const idToRemove = parseInt(event.target.parentElement.parentElement.id);
    onRemoveItem(idToRemove);
  }

  function handleMarkAsCompleted(event) {
    onMarkAsCompleted(event.target.parentElement.parentElement.id);
  }
  return (
    <ul className='todo-list'>
      {items.map((item) => (
        <li key={item.id.toString()} id={item.id.toString()}>
          <div className='view'>
            <input
              className='toggle'
              type='checkbox'
              onChange={handleMarkAsCompleted}
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
