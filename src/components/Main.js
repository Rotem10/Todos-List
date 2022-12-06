import { TodosList } from './TodosList';

export function Main({
  todos,
  onRemoveItem,
  onToggleCompleted,
  toggleAll: toggleCompletedAll,
}) {
  let completedAll = false;

  function handleToggleAll() {
    completedAll = !completedAll;
    toggleCompletedAll(completedAll);
  }

  return (
    <section className='main'>
      <input
        className='toggle-all'
        type='checkbox'
        onChange={handleToggleAll}
      />
      <TodosList
        todos={todos}
        onRemoveItem={onRemoveItem}
        onToggleCompleted={onToggleCompleted}
      />
    </section>
  );
}
