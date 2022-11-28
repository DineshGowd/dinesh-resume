import React from 'react'

const EducationList = ({ eduactionItem }) => {
    console.log('per :', eduactionItem)
    const { title, timeline, description } = eduactionItem;
    return (
        <div style={{margin:'10px'}}>
            <h4 style={{margin:'0px'}}>{title}</h4>
            <span style={{margin:'0px', fontSize:'13px'}}>{timeline}</span>
            <p style={{margin:'5px 0', fontSize:'15px'}}>{description}</p>
        </div>
    );
}

export default EducationList