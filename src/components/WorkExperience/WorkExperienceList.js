import React from 'react'
import wipro from '../../assets/images/wipro.png'
import sakha from '../../assets/images/sakha.png'

const WorkExperienceList = ({ workItem }) => {
    console.log('per :', workItem)
    const { title, timeline, Org, description, points } = workItem;
    return (
        <div>
            <h3 style={{ marginBottom: '8px', fontSize: '16px' }}>Project : {title}</h3>
            <p style={{ margin: '0 0 6px 0', fontSize: '15px' }}>
                {Org === 'Wipro Limited' && <> <img src={wipro} alt="Wipro Limited" height='15px' /> {Org}</>}
                {Org === 'Sakha Global' && <> <img src={sakha} alt="Sakha Global" height='15px' /> {Org}</>}
                {Org === 'Personal Project, Sakha Global' && <><img src={sakha} alt="Sakha Global" height='15px' />{Org.slice(17,30)}, {Org.slice(0,16)}</>}
                {Org === 'Renault Nissan' && <>{Org}</>}
                {Org === 'Personal Project' && <>{Org}</>}
            </p>
            <p style={{ margin: '0 0 6px 0', fontSize: '14px' }}>📅 {timeline}</p>
            <p>{description}</p>
            <p>Achievements/Tasks :</p>
            <ul>
                {points.map((point) => <li>{point}</li>)}
            </ul>
        </div>
    );
}

export default WorkExperienceList