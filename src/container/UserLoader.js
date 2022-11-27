import React, { useState, useEffect } from 'react'
import axios from 'axios';

const UserLoader = ({userid, children }) => {
    const [user, setUser] = useState(null || {});

    useEffect(() => {
        // IIFE
        (async () => {
            const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userid}`);
            console.log('res : ', res)
            setUser(res.data)
        })();
    },[userid])
    return (
        <div>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { user })
                }
                return child;
            })}
        </div>
    )
}

export default UserLoader