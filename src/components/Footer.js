export function Footer({ itemsLeft, onClearCompleted }) {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{itemsLeft}</strong> items left
      </span>
      <button className='clear-completed' onClick={() => onClearCompleted()}>
        Clear completed
      </button>
    </footer>
  );
}
