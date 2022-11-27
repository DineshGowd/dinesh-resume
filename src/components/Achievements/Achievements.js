import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList';
import AchievementsList from './AchievementsList';

const achievementItem = [
    {
        title: "Best Project Contribution",
    },
    {
        title: "Best Project Mentoring Contribution",
    },
    
];


const Achievements = () => {
    return (
        <div>
            <h3 style={{textDecoration:'underline wavy cyan'}}>Achievements : </h3>
            <RegularList
                items={achievementItem}
                resourceName="achievementItem"
                itemComponent={AchievementsList}
            />
        </div>
    )
}

export default Achievements