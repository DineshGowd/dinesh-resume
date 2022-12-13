import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList';
import StrengthsList from './StrengthsList';

const strengthItem = [
    {
        title: "Team Work",
    },
    {
        title: "Mentoring",
    },
    {
        title: "Problem Solving",
    },
    
];


const Strengths = () => {
    return (
        <div>
            <h3 style={{marginBottom:'10px',fontSize:'16px', textDecoration:'underline black 1.5px',textTransform: 'Uppercase', textUnderlineOffset: '5px'}}>Strengths : </h3>
            <RegularList
                items={strengthItem}
                resourceName="strengthItem"
                itemComponent={StrengthsList}
            />
        </div>
    )
}

export default Strengths