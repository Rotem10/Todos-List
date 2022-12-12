import { useRef, useContext } from 'react';
import { authContext } from '../providers/authContext';
import { useNavigate } from 'react-router-dom';

export function Login() {
  const inputUserNameRef = useRef(null);
  const inputPasswordRef = useRef(null);

  const { setUser } = useContext(authContext);
  const nevigate = useNavigate();

  function handleLogin() {
    setUser({
      userName: inputUserNameRef.current.value,
      password: inputPasswordRef.current.value,
    });
    inputUserNameRef.current.value = '';
    inputPasswordRef.current.value = '';
    nevigate('/my-list');
  }
  return (
    <form>
      <div className='mb-3'>
        <label htmlFor='exampleInputEmail1' className='form-label'>
          Email address
        </label>
        <input
          type='email'
          className='form-control'
          id='exampleInputEmail1'
          aria-describedby='emailHelp'
          ref={inputUserNameRef}
        />
      </div>
      <div className='mb-3'>
        <label htmlFor='exampleInputPassword1' className='form-label'>
          Password
        </label>
        <input
          type='password'
          className='form-control'
          id='exampleInputPassword1'
          ref={inputPasswordRef}
        />
      </div>
      <button onClick={handleLogin} className='btn btn-primary'>
        Submit
      </button>
    </form>
  );
}
