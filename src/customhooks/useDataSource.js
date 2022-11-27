import React, { useEffect, useState } from 'react'

const useDataSource = (getResourceFunc) => {
    const [resource, setResource] = useState(null);
    useEffect(() => {
        (async () => {
            const result = await getResourceFunc();
            setResource(result);
        })();
    },[getResourceFunc])
    return resource;
}

export default useDataSource