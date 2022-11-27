import React, { useEffect, useState } from 'react'
import axios from 'axios';

const useCurrentUser = () => {
    const [user, setUser] = useState(null);
    useEffect(() => {
        (async () => {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users/1');
            setUser(response.data);
        })();
    },[])
    return user;
}

export default useCurrentUser