import React from 'react'

const AchievementsList = ({ achievementItem }) => {
    const { title, description } = achievementItem;
    return (
        <>
            <h5 style={{margin:'10px 0 0 0'}}>{title}</h5>
            <p style={{margin:'5px 0 0 10px', fontSize:'12px'}}>{description}</p>
        </>
    );
}

export default AchievementsList