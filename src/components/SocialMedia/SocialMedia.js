import React from 'react'
import styled from 'styled-components';
import RegularList from '../../Layouts/ListItemComponents/RegularList';
import SocialMediaList from './SocialMediaList';

const SocialLinks = styled.div`
    & a{
        color:black;
    }
`;

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
        title: "Resume",
        url:'pateldineshgowdresume.netlify.app'
    },
    {
        title: "Quora",
        url:'qr.ae/TJAw1z'
    }
];


const SocialMedia = () => {
    return (
        <SocialLinks>
            <h3 style={{textDecoration:'underline black 1.5px',textTransform: 'Uppercase', textUnderlineOffset: '5px'}}>Social Media : </h3>
            <RegularList
                items={socialMediaListItem}
                resourceName="socialMediaListItem"
                itemComponent={SocialMediaList}
            />
        </SocialLinks>
    )
}

export default SocialMedia