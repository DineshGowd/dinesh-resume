import React from 'react'
import Achievements from '../Achievements/Achievements'
import Certification from '../Certification/Certification'
import Education from '../Education/Education'
import ProgramSkills from '../ProgramSkills/ProgramSkills'
import SocialMedia from '../SocialMedia/SocialMedia'
import Strengths from '../Strengths/Strengths'

const RightSection = () => {
  return (
    <div style={{marginLeft:'20px'}}>
      <ProgramSkills />
      <Strengths />
      {/* <Achievements /> */}
      {/* <Certification /> */}
      <Education />
      <SocialMedia />
    </div>
  )
}

export default RightSection