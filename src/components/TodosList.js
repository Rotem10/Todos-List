export function TodosList({ items, onRemoveItem, onMarkAsCompleted }) {
  function handleRemoveItem(event) {
    onRemoveItem(event.target.parentElement.parentElement.id);
    console.log(event.target.parentElement.parentElement.id);
  }

  function handleMarkAsCompleted(event) {
    onMarkAsCompleted(event.target.parentElement.parentElement.id);
  }
  return (
    <ul className='todo-list'>
      {items.map((item) => (
        <li key={item.id} id={item.id}>
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
