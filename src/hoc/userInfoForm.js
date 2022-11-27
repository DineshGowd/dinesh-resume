import React from 'react'
import withEditableUser from './withEditableUser'

const userInfoForm = withEditableUser(({ user, onChangeUser, onSaveUser, onResetUser }) => {
  const { name, age, hairColor } = user || {};
  return user ? (
    <>
      <label>Name</label>
      <input value={name} onChange={e => onChangeUser({ name: e.target.value })} />
      <label>age</label>
      <input value={age} onChange={e => onChangeUser({ age: Number(e.target.value) })} />
      <label>Hair Color</label>
      <input value={hairColor} onChange={e => onChangeUser({ hairColor: e.target.value })} />

    <button onClick={onSaveUser}>Save User</button>
    <button onClick={onResetUser}>Reset User</button>
    </>
  ) : (<p>Loading ...</p>)
},'123')
export default userInfoForm