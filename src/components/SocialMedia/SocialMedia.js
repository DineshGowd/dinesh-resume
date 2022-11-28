import React from 'react'
import RegularList from '../../Layouts/ListItemComponents/RegularList';
import SocialMediaList from './SocialMediaList';

const socialMediaListItem = [
    {
        title: "LinkedIn",
        url:'linkedin.com/in/dineshgowdpatel'
    },
    {
        title: "YouTube",
        url:'www.youtube.com/@autodidact2590'
    },
    {
        title: "Quora",
        url:'qr.ae/TJAw1z'
    }    
];


const SocialMedia = () => {
    return (
        <div>
            <h3 style={{textDecoration:'underline wavy cyan'}}>Social Media : </h3>
            <RegularList
                items={socialMediaListItem}
                resourceName="socialMediaListItem"
                itemComponent={SocialMediaList}
            />
        </div>
    )
}

export default SocialMedia