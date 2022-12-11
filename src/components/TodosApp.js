import { Header } from './Header';
import { ToggleAll } from './ToggleAll';
import { Footer } from './Footer';
import { TodosList } from './TodosList';
import { useTodos } from '../hooks/useTodos';
import { listContext } from '../providers/listContext';

export function TodosApp({ appTitle }) {
  const todosMethods = useTodos();

  return (
    <listContext.Provider value={todosMethods}>
      <section className='todoapp'>
        <Header appTitle={appTitle} />
        <ToggleAll>
          <TodosList />
        </ToggleAll>
        <Footer />
      </section>
    </listContext.Provider>
  );
}
