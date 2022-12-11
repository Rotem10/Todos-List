import { useRef, useState } from 'react';
import './App.css';
import { TodosApp } from './components/TodosApp';

function App() {
  const [listTitles, setListTitles] = useState([
    'todo at work',
    'todo at home',
  ]);

  const [user, setUser] = useState(null);

  const inputListTitleRef = useRef(null);
  const inputUserNameRef = useRef(null);
  const inputPasswordRef = useRef(null);

  function createNewList(title) {
    const newListTitles = listTitles.concat([title]);
    setListTitles(newListTitles);
  }

  function handleCreateList() {
    createNewList(inputListTitleRef.current.value);
    inputListTitleRef.current.value = '';
  }

  function handleLogin() {
    setUser({
      userName: inputUserNameRef.current.value,
      password: inputPasswordRef.current.value,
    });
    inputUserNameRef.current.value = '';
    inputPasswordRef.current.value = '';
  }
  if (user) {
    return (
      <>
        <div className='new-list-input'>
          <input
            type='text'
            placeholder='Enter list title'
            ref={inputListTitleRef}
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
      <div className='login'>
        <input
          type='text'
          placeholder='User Name'
          ref={inputUserNameRef}
          className='user-name'
          autoFocus
        />
        <input
          type='text'
          placeholder='Password'
          ref={inputPasswordRef}
          className='password'
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    );
  }
}

export default App;
