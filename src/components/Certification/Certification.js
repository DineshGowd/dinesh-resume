import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList';
import CertificationList from './CertificationList';

const certificationItem = [
    {
        title: " IBM CERTIFIED ASSOCIATE APPLICATION DEVELOPER - TRIRIGA Application Platform 3.2.1 (11 / 2020 - Present)",
        description:"IBM Certification"
    },
    {
        title: "IBM Watson Assistant Foundation (12 / 2020 - Present)",
        description:"IBM Badge"
    },
    {
        title: "IOT - TRIRIGA - Workplace Experience (12 / 2020 - Present)",
        description:"IBM Badge"
    },
    
];


const Certification = () => {
    return (
        <div>
            <h3 style={{marginBottom:'10px',textDecoration:'underline wavy cyan'}}>Certification : </h3>
            <RegularList
                items={certificationItem}
                resourceName="certificationItem"
                itemComponent={CertificationList}
            />
        </div>
    )
}

export default Certification