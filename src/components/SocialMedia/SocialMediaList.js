import React from 'react'
import { AiOutlineLinkedin, AiOutlineYoutube } from 'react-icons/ai';
import { FaQuora } from 'react-icons/fa';
// import { useMediaQuery } from 'react-responsive'


const SocialMediaList = ({ socialMediaListItem }) => {
    const { title, url} = socialMediaListItem;
    // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    return (
        <div style={{ margin: '10px 0' }}>
            <a style={{ textDecoration: 'none' }} href={`http://${url}`}>
                {title === 'LinkedIn' && <><AiOutlineLinkedin style={{ margin: '-3px 10px' }} />{title} - dineshgowdpatel </>}
                {title === 'YouTube' && <><AiOutlineYoutube style={{ margin: '-3px 10px' }} />{title} - @autodidact2590</>}
                {title === 'Quora' && <><FaQuora style={{ margin: '-3px 10px' }} />{title}</>}
            </a>
            <br />
        </div>
    );
}

export default SocialMediaList