import React from 'react'
import { AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai';
import { FaQuora } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'


const SocialMediaList = ({ socialMediaListItem }) => {
    const { title, url } = socialMediaListItem;
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div style={{ margin: '10px 0' }}>
            {title === 'LinkedIn' && <AiOutlineLinkedin style={{ margin: '-3px 0' }} />}
            {title === 'YouTube' && <AiOutlineYoutube style={{ margin: '-3px 0' }} />}
            {title === 'Quora' && <FaQuora style={{ margin: '-3px 0' }} />}
            <span> {title} : </span>
            {isTabletOrMobile && <br />}<a style={{ textDecoration: 'none' }} href={url}>{url}</a>
            <br />
        </div>
    );
}

export default SocialMediaList