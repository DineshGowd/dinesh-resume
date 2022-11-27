import axios from 'axios';
import React, { useEffect, useState } from 'react'

const withUser = (Component, userId) => {
    return (props => {
        const [user, setUser] = useState(null);

        useEffect(() => {
            (async () => {
                const res = await axios.get(`https://dummyjson.com/users/${userId}`);
                setUser(res.data)
            })();
        },[]);

        return <Component {...props} user={user} />
    })
}

export default withUser