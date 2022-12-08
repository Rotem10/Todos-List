export function Footer({ itemLeftCount, onClearCompleted }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{itemLeftCount}</strong> items left
      </span>
      <button className='clear-completed' onClick={onClearCompleted}>
        Clear completed
      </button>
    </footer>
  );
}
