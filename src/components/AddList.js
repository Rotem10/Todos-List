import { useRef } from 'react';
import { TodosApp } from './TodosApp';
import { useApp } from '../hooks/useApp';

export function AddList() {
  const { listTitles, createNewList } = useApp();
  const inputListTitleRef = useRef(null);

  function handleCreateList() {
    if (inputListTitleRef.current.value) {
      createNewList(inputListTitleRef.current.value);
      inputListTitleRef.current.value = '';
    }
  }
  return (
    <>
      <div className='input-group'>
        <input
          type='text'
          placeholder='Enter list title'
          ref={inputListTitleRef}
          className='form-control'
          aria-describedby='button-addon2'
        />
        <button
          className='btn btn-outline-secondary'
          id='button-addon2'
          onClick={handleCreateList}>
          Add list
        </button>
      </div>
      <div>
        {listTitles.map((listTitle) => (
          <TodosApp appTitle={listTitle} />
        ))}
      </div>
    </>
  );
}
