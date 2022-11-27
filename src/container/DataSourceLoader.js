import React, { useState, useEffect } from 'react'
const DataSourceLoader = ({ getDataFunc = () => { }, resourceName, children }) => {
    const [state, setState] = useState(null || {});

    useEffect(() => {
        // IIFE
        (async () => {
            const res = await getDataFunc();
            console.log('response : ', res)
            setState(res)
        })();
    }, [getDataFunc])
    useEffect(() => {
        console.log('yyyyy : ', state)
    
    }, [state])
    return (
        <div>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child, { [resourceName]: state })
                }
                return child;
            })}
        </div>
    )
}

export default DataSourceLoader