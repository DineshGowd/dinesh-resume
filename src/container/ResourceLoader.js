import React, { useState, useEffect } from 'react'
import axios from 'axios';

const ResourceLoader = ({resourceUrl,resourceName, children }) => {
    const [state, setState] = useState(null || {});

    useEffect(() => {
        // IIFE
        (async () => {
            const res = await axios.get(`${resourceUrl}`);
            console.log('res : ', res)
            setState(res.data)
        })();
    },[resourceUrl])
    return (
        <div>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]:state })
                }
                return child;
            })}
        </div>
    )
}

export default ResourceLoader