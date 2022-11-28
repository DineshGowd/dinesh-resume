import React from 'react'

const CertificationList = ({ certificationItem }) => {
    const { title, description } = certificationItem;
    return (
        <>
            <h5 style={{margin:'10px 0 0 0'}}>{title}</h5>
            <p style={{margin:'5px 0 0 10px', fontSize:'12px'}}>{description}</p>
        </>
    );
}

export default CertificationList