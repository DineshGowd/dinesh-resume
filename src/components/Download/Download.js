import React from 'react'
import './download.css'
import resume from '../../assets/document/dinesh-resume.pdf'

const Download = () => {

    return (
        <div>
            <button className="button-85" role="download"> <a href={resume} style={{textDecoration:'none',color:'white'}} download> Download <br /> Resume </a></button>
        </div>
    )
}

export default Download