import { useContext } from 'react';
import { listContext } from '../providers/list-context';

export function ToggleAll({ children }) {
  const { toggleAllItems } = useContext(listContext);

  function handleToggleAll(event) {
    toggleAllItems(event.target.checked);
  }

  return (
    <section className='main'>
      <input
        className='toggle-all'
        type='checkbox'
        onChange={handleToggleAll}
      />
      {children}
    </section>
  );
}
