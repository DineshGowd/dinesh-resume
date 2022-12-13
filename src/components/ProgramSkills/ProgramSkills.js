import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList';
import ProgramSkillsList from './ProgramSkillsList';

const programSkillsItem = [
    {
        title: "Rust",
    },
    {
        title: "JavaScript",
    },
    {
        title: "PWA",
    },
    {
        title: "React JS",
    },
    {
        title: "gRPC",
    },
    {
        title: "Redux",
    },
    {
        title: "Diesel ORM",
    },
    {
        title: "HTML",
    },
    {
        title: "CSS",
    },
    {
        title: "GIT",
    },
    {
        title: "Core Java",
    },    
];


const ProgramSkills = () => {
    return (
        <div>
            <h3 style={{marginBottom:'10px',fontSize:'16px',textDecoration:'underline wavy cyan'}} >Skill Set : </h3>
            <RegularList
                items={programSkillsItem}
                resourceName="programSkillsItem"
                itemComponent={ProgramSkillsList}
            />
        </div>
    )
}

export default ProgramSkills