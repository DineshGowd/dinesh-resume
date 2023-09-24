import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList';
import ProgramSkillsList from './ProgramSkillsList';

const programSkillsItem = [
    {
        title: "Java",
    },
    {
        title: "Selenium",
    },
    {
        title: "SQL",
    },
    {
        title: "HTML",
    },
    {
        title: "Programming",
    },
    {
        title: "SDLC",
    },
    {
        title: "STLC",
    },
    {
        title: "Agile Methodologies",
    },
];


const ProgramSkills = () => {
    return (
        <div>
            <h3 style={{marginBottom:'10px',fontSize:'16px',textDecoration:'underline black 1.5px',textTransform: 'Uppercase', textUnderlineOffset: '5px'}} >Skill Set : </h3>
            <RegularList
                items={programSkillsItem}
                resourceName="programSkillsItem"
                itemComponent={ProgramSkillsList}
            />
        </div>
    )
}

export default ProgramSkills