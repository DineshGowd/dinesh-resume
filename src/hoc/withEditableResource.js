import React, { useEffect, useState } from 'react'
import axios from 'axios';

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);

const withEditableResource = (Component, resourcePath, resourceName) => {
  return (props) => {
    const [originalData, setOriginalData] = useState(null);
    const [data, setData] = useState(null);

    useEffect(() => {
      (async () => {
        const res = await axios.get(resourcePath);
        setData(res.data)
        setOriginalData(res.data)
      })();
    }, []);

    const onChange = changes => {
      setData({ ...data, ...changes });
      capitalize
    }

    const onSave = async () => {
      const res = await axios.post(resourcePath, { [resourcePath]:data });
      setData(res.data)
      setOriginalData(res.data)
    }

    const onReset = async () => {
      setData(originalData)
    }

    const resourceProps={
        [resourceName]:data,
        [`onChange${capitalize(resourceName)}`]:onChange,
        [`onSave${capitalize(resourceName)}`]:onSave,
        [`onReset${capitalize(resourceName)}`]:onReset
    }

    return <Component {...props} {...resourceProps} />
  }
}

export default withEditableResource