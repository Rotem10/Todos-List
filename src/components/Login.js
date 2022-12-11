import { useRef, useContext } from 'react';
import { authContext } from '../providers/authContext';

export function Login() {
  const inputUserNameRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const setUser = useContext(authContext);

  function handleLogin() {
    setUser({
      userName: inputUserNameRef.current.value,
      password: inputPasswordRef.current.value,
    });
    inputUserNameRef.current.value = '';
    inputPasswordRef.current.value = '';
  }
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
      <button className='login-btn' onClick={handleLogin}>
        Login
      </button>
    </div>
  );
}
