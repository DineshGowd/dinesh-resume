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
        url:'linkedin.com/in/adarsh-k-mohan-a4a374202'
    },
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