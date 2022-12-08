export function ToggleAll({ onToggleAllItems, children }) {
  function handleToggleAll(event) {
    onToggleAllItems(event.target.checked);
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
