import React, { useEffect, useState } from 'react'
import axios from 'axios';

const withEditableUser = (Component, userId) => {
  return (props) => {
    const [originalUser, setOriginalUser] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
      (async () => {
        const res = await axios.get(`https://dummyjson.com/users/${userId}`);
        setUser(res.data)
        setOriginalUser(res.data)
      })();
    }, []);

    const onChangeUser = changes => {
      setUser({ ...user, ...changes });
    }

    const onSaveUser = async () => {
      const res = await axios.post(`https://dummyjson.com/users/${userId}`, { user });
      setUser(res.data)
      setOriginalUser(res.data)
    }

    const onResetUser = async () => {
      setUser(originalUser)
    }

    return <Component {...props} user={user} onChangeUser={onChangeUser} onSaveUser={onSaveUser} onResetUser={onResetUser}/>
  }
}

export default withEditableUser