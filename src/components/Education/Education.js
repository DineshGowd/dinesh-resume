import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList'
import EducationList from './EducationList'

const eduactionItem = [
    {
        title: "B.Tech - Computer Science",
        timeline: "06/2015 - 06/2020",
        description: "G Pulla Reddy Engineering College, Kurnool"
    },
    {
        title: "Intermediate - MPC",
        timeline: "06/2013 - 06/2015",
        description: "Narayana Junior College, Anantapur"
    },
    {
        title: "S S C",
        timeline: "06/2012 - 06/2023",
        description: "Sri Sadguru Jyothi E M School, Konakondla"
    }
];

const Education = () => {
    return (
        <div>
            <h3 style={{textDecoration:'underline wavy cyan'}}>Education : </h3>
            <RegularList
                items={eduactionItem}
                resourceName="eduactionItem"
                itemComponent={EducationList}
            />
        </div>
    )
}

export default Education