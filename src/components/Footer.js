import { useContext } from 'react';
import { listContext } from '../providers/listContext';

export function Footer() {
  const { noneCompletedItemsCount, clearAllCompletedItems } =
    useContext(listContext);

  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{noneCompletedItemsCount}</strong> items left
      </span>
      <button className='clear-completed ' onClick={clearAllCompletedItems}>
        Clear completed
      </button>
    </footer>
  );
}
