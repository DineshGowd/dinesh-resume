import React from 'react'

const WorkExperienceList = ({ workItem }) => {
    console.log('per :', workItem)
    const { title, timeline,Org, description, points } = workItem;
    return (
        <div>
            <h3 style={{marginBottom:'8px', fontSize:'16px'}}>Project : {title}</h3>
            <p style={{ margin: '0 0 6px 0',fontSize:'15px' }}>{Org}</p>
            <p style={{ margin: '0 0 6px 0',fontSize:'14px' }}>📅 {timeline}</p>
            <p>{description}</p>
            <p>Achievements/Tasks :</p>
            <ul>
                {points.map((point) => <li>{point}</li>)}
            </ul>
        </div>
    );
}

export default WorkExperienceList