import { Login } from './Login';
import { authContext } from '../providers/authContext';
import { useApp } from '../hooks/useApp';

export function Home() {
  const appMethods = useApp();

  return (
    <authContext.Provider value={appMethods}>
      <header>
        <h2 className='mb-3'>Sign in to create your todo list</h2>
        <Login />
      </header>
    </authContext.Provider>
  );
}
