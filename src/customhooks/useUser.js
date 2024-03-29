import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useUser = (userId) => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
            setUser(response.data);
        })();
    },[userId])
    return user;
}

export default useUser