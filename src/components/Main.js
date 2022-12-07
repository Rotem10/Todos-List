import { TodosList } from './TodosList';

export function Main({
  items,
  onRemoveItem,
  onToggleItemCompleted,
  onToggleAllItems,
}) {
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
      <TodosList
        items={items}
        onRemoveItem={onRemoveItem}
        onToggleItemCompleted={onToggleItemCompleted}
      />
    </section>
  );
}
