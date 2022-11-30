import { useState } from 'react';

export default function UseId() {
  const getId = () => {
    const idString = localStorage.getItem('Id');
    const userId = JSON.parse(idString);
    return userId
  };

  const [Id, setId] = useState(getId());

  const saveId = userId => {
    localStorage.setItem('Id', JSON.stringify(userId));
    setId(userId.id);
  };

  return {
    setId: saveId,
    Id
  }
}
