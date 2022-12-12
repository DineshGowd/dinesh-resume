import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList'
import WorkExperienceList from './WorkExperienceList'

const workItem = [
    {
        title: "Rust Web Applications",
        timeline: "08/2021 - present",
        description: "Created Rust Web applications and having good exposure to rust data structures. ",
        points: ["Creating API endpoints with efficient code in RUST programming language",
            "Connecting to MongoDB using Rocket Web Framework",
            "Performing Create, Read, Delete , Update operation on MongoDB using Rust Web Framework",
            "Exhibiting best practice in Rust and mentoring the juniors on Rust Programming"
        ]
    },
    {
        title: "Celebrity Connect",
        timeline: "08/2021 - 09/2022",
        description: "Worked as Frontend UI / UX Developer in implementation of the solution to Celebrity Web App",
        points: ["Experienced in React JS and React Design Patterns. ",
            "Developed web app with excellent User Experience and User Interface by implementing Progressive Web Application",
            "Having good exposure to data flow management in react application using Redux and Redux Toolkit",
        ]
    },
    {
        title: "Starbucks",
        timeline: "06/2019 - 07/2021",
        description: "Worked as TRIRIGA UI / UX Developer in transforming classic form to react form with enhanced navigation.",
        points: ["Developed TRIRIGA UI/UX Application using React which optimized user experience that reduces manual efforts.",
            "Flexible in designing and implementing UX application using TRIRIGA UI/UX Designer tools. Model Designer, Web ViewDesigner, Model - View Designer and Application Designer.",
            "Worked closely with Development Teams and attended meetings to understand client requirements and discuss regarding requirement implementation in effective ways Created POC's and Demo for In-Pipeline Projects.",
            "High customer satisfaction index and multiple recognition at customer level."
        ]

    }
];

const WorkExperience = () => {
    return (
        <div>
            <h3 style={{ textDecoration: 'underline wavy cyan' }}>Work Experience : </h3>
            <RegularList
                items={workItem}
                resourceName="workItem"
                itemComponent={WorkExperienceList}
            />
        </div>
    )
}

export default WorkExperience