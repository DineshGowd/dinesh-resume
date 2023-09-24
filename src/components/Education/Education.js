import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList'
import EducationList from './EducationList'

const eduactionItem = [
    {
        title: "BE Mechanical Engineering",
        timeline: "05/2016 - 04/2020",
        description: "Aarupadai Veedu Institute Of Technology"
    },
    {
        title: "H S S",
        timeline: "June 2014 - May 2016",
        description: "Rajeev Gandhi Higher Secondary School , Kannur, Kerala"
    },
    {
        title: "S S L C",
        timeline: "MAY 2013 - APR 2014",
        description: "Rajeev Gandhi Higher Secondary School , Kannur, Kerala"
    }
];

const Education = () => {
    return (
        <div>
            <h3 style={{marginBottom:'10px', textDecoration:'underline black 1.5px',textTransform: 'Uppercase', textUnderlineOffset: '5px'}}>Education : </h3>
            <RegularList
                items={eduactionItem}
                resourceName="eduactionItem"
                itemComponent={EducationList}
            />
        </div>
    )
}

export default Education