export function Footer({ itemsLeftCount, onClearCompleted }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{itemsLeftCount}</strong> items left
      </span>
      <button className='clear-completed' onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
