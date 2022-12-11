import { useContext } from 'react';
import { listContext } from '../providers/list-context';

export function Header({ appTitle }) {
  const { addTodo } = useContext(listContext);

  function handleTaskInput(event) {
    if (event.key === 'Enter') {
      addTodo(event.target.value);
      event.target.value = '';
    }
  }
  return (
    <header className='header'>
      <h1>{appTitle}</h1>
      <input
        className='new-todo'
        placeholder='What needs to be done?'
        onKeyUp={handleTaskInput}
        autoFocus
      />
    </header>
  );
}
