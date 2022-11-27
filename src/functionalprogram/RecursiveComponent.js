import React from 'react'


const isObject = x => typeof x === 'object' && x != null;

const RecursiveComponent = ({ data }) => {
    if (!isObject(data)) {
        return (
            <li>{data}</li>
        )
    }
    const pairs = Object.entries(data);
    console.log('data', pairs);

    return (<>
        {
            pairs.map(([key, value], i) =>
                <div key={i}>
                    <li>{key}</li>
                    <ul>
                        <RecursiveComponent data={value} />
                    </ul>
                </div>
            )
        }
    </>)
}

export default RecursiveComponent