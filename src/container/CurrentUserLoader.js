import React, { useState, useEffect } from 'react'
import axios from 'axios';

const CurrentUserLoader = ({ children }) => {
    const [user, setUser] = useState(null || {});

    useEffect(() => {
        // IIFE
        (async () => {
            const res = await axios.get('https://jsonplaceholder.typicode.com/users/3');
            console.log('res : ', res)
            setUser(res.data)
        })();
    },[])
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

export default CurrentUserLoader