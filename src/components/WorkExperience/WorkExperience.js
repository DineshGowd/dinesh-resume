import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList'
import WorkExperienceList from './WorkExperienceList'

const workItem = [
    {
        title: "Celebrity Connect",
        timeline: "06/2015 - 06/2020",
        description: "This resume sample was contributed by a real person who got hired with Kickresume’s help. Create your resume now or edit this resume example. ",
        points:["Developed TRIRIGA UI/UX Application using React which optimized user experience that reduces manual efforts.",
        ]
    },
    {
        title: "5G",
        timeline: "06/2015 - 06/2020",
        description: "Worked as TRIRIGA Classic / UX Developer in implementation of the solution to 5G Project includes creation of BO,forms,dashboard and UX Application that uses Google Maps and TRIRIGA data. ",
        points:["Experienced in Builder Tools like Data Modeler, Form Builder, Association Manager, Workflow Builder, Query etc.",
        "Developed monitoring functionality by collecting data using OSLC.",
        "Worked on TRIRIGA Application (v3.8) installation setup and upgrade activites. Having good Exposure to WebSphere Application Liberty Profile and its configuration.",
        "Enhanced TRIRIGA UI/UX app by integrating Google maps API with Polymer and TRIRIGA web components which improved user experience."]
    },
    {
        title: "Starbucks",
        timeline: "06/2015 - 06/2020",
        description: "Worked as TRIRIGA UI / UX Developer in transforming classic form to react form with enhanced navigation.",
        points:["Developed TRIRIGA UI/UX Application using React which optimized user experience that reduces manual efforts.",
        "Flexible in designing and implementing UX application using TRIRIGA UI/UX Designer tools – Model Designer, Web ViewDesigner, Model - View Designer and Application Designer.",
        "Worked closely with Development Teams and attended meetings to understand client requirements and discuss regarding requirement implementation in effective ways Created POC's and Demo for In-Pipeline Projects.",
        "High customer satisfaction index and multiple recognition at customer level."
        ]
    
    }
];

const WorkExperience = () => {
    return (
        <div>
            <h3 style={{textDecoration:'underline wavy cyan'}}>Work Experience : </h3>
            <RegularList
                items={workItem}
                resourceName="workItem"
                itemComponent={WorkExperienceList}
            />
        </div>
    )
}

export default WorkExperience