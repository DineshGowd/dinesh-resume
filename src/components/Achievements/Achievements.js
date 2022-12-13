import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList';
import AchievementsList from './AchievementsList';

const achievementItem = [
    {
        title: "Best Contributor to Project and Practice",
        description:"Recognized for my excellent contribution to Practice"
    },
    {
        title: "Best Mentoring / Presentation in Center of Excellence",
        description:"Recognized for my excellent contribution to Practice"
    },
    
];


const Achievements = () => {
    return (
        <div>
            <h3 style={{marginBottom:'10px', textDecoration:'underline black 1.5px',textTransform: 'Uppercase', textUnderlineOffset: '5px'}}>Achievements : </h3>
            <RegularList
                items={achievementItem}
                resourceName="achievementItem"
                itemComponent={AchievementsList}
            />
        </div>
    )
}

export default Achievements