import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList'
import WorkExperienceList from './WorkExperienceList'

const workItem = [
    {
        title: "Renault Nissan Automotive India PVT LTD",
        Org:'Renault Nissan', 
        timeline: "Dec 2020 - Dec 2021",
        description: "Created Rust web applications and had good exposure to rust data structures. ",
        points: ["Kept neat, organized records for completed work. Assisted in executing assigned company initiatives and programs.",
            "Completed required training programs and accompanying exams to maintain apprenticeship status.",
        ]
    },
    {
        title: "Testing Project",
        Org:'Personal Project',
        timeline: "01/2022 - 09/2022",
        description: "Worked as Frontend UI / UX Developer in implementation of solution to Celebrity Web App.",
        points: ["Experienced in React JS and React Design Patterns. ",
            "Developed web app with excellent User Experience and User Interface by implementing Progressive Web Application.",
            "Had good exposure to data flow management in react application using Redux and Redux Toolkit.",
        ]
    },
    
];

const WorkExperience = () => {
    return (
        <div>
            <h3 style={{ textDecoration: 'underline black 1.5px',textTransform: 'Uppercase', textUnderlineOffset: '5px' }}>Project Experience : </h3>
            <RegularList
                items={workItem}
                resourceName="workItem"
                itemComponent={WorkExperienceList}
            />
        </div>
    )
}

export default WorkExperience