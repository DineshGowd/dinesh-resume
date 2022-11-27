import React from 'react'

const AchievementsList = ({ achievementItem }) => {
    const { title } = achievementItem;
    return (
        <>
            <h5>{title}</h5>
        </>
    );
}

export default AchievementsList