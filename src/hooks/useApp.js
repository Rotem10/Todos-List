import { useState } from 'react';

export function useApp() {
  const [listTitles, setListTitles] = useState([
    'todo at work',
    'todo at home',
  ]);

  const [user, setUser] = useState(null);

  function createNewList(title) {
    const newListTitles = listTitles.concat([title]);
    setListTitles(newListTitles);
  }

  return { listTitles, user, setUser, createNewList };
}
