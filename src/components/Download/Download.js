import React from 'react'
import './download.css'
import resume from '../../assets/document/DineshResume.pdf'

const Download = () => {
    return (
        <div>
            <button className="button-85"> <a href={resume} style={{textDecoration:'none',color:'white'}} download> Download <br /> Resume </a></button>
        </div>
    )
}

export default Download