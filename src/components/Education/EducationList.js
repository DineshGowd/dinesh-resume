import React from 'react'

const EducationList = ({ eduactionItem }) => {
    console.log('per :', eduactionItem)
    const { title, timeline, description } = eduactionItem;
    return (
        <>
            <h4 style={{margin:'0px'}}>{title}</h4>
            <span style={{margin:'0px', fontSize:'13px'}}>{timeline}</span>
            <p>{description}</p>
        </>
    );
}

export default EducationList