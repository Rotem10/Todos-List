export function Header({ title, text, onAddItem }) {
  function handleTaskInput(event) {
    if (event.key === 'Enter') {
      onAddItem(event.target.value);
    }
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <input
        className='new-todo'
        placeholder={text}
        onKeyUp={handleTaskInput}
        autoFocus
      />
    </header>
  );
}
