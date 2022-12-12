import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList'
import EducationList from './EducationList'

const eduactionItem = [
    {
        title: "B.Tech - Computer Science",
        timeline: "05/2015 - 04/2019",
        description: "G Pulla Reddy Engineering College, Kurnool"
    },
    {
        title: "Intermediate - MPC",
        timeline: "06/2013 - 04/2015",
        description: "Narayana Junior College, Anantapur"
    },
    {
        title: "S S C",
        timeline: "06/2012 - 05/2013",
        description: "Sri Sadguru Jyothi E M School, Konakondla"
    }
];

const Education = () => {
    return (
        <div>
            <h3 style={{marginBottom:'10px', textDecoration:'underline wavy cyan'}}>Education : </h3>
            <RegularList
                items={eduactionItem}
                resourceName="eduactionItem"
                itemComponent={EducationList}
            />
        </div>
    )
}

export default Education