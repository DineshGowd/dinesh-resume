import React from 'react'

const WorkExperienceList = ({ workItem }) => {
    console.log('per :', workItem)
    const { title, timeline, description, points } = workItem;
    return (
        <div>
            <h3>Project : {title}</h3>
            <p style={{ margin: '0px' }}> 📅 {timeline}</p>
            <p>{description}</p>
            <p>Achievements/Tasks :</p>
            <ul>
                {points.map((point) => <li>{point}</li>)}
            </ul>
        </div>
    );
}

export default WorkExperienceList