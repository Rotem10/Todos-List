import './App.css';
import { useRef } from 'react';
import { TodosApp } from './components/TodosApp';
import { useApp } from './hooks/useApp';
import { Login } from './components/Login';
import { authContext } from './providers/authContext';

function App() {
  const { listTitles, user, setUser, createNewList } = useApp();

  const inputListTitleRef = useRef(null);

  function handleCreateList() {
    createNewList(inputListTitleRef.current.value);
    inputListTitleRef.current.value = '';
  }

  if (user) {
    return (
      <>
        <div>
          <input
            type='text'
            placeholder='Enter list title'
            ref={inputListTitleRef}
            className='new-list-input'
          />
        </div>
        <button className='add-list' onClick={handleCreateList}>
          Add list
        </button>
        <>
          {listTitles.map((listTitle) => (
            <TodosApp appTitle={listTitle} />
          ))}
        </>
      </>
    );
  } else {
    return (
      <authContext.Provider value={setUser}>
        <Login />
      </authContext.Provider>
    );
  }
}

export default App;
