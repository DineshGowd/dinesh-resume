import React from 'react'
import Achievements from '../Achievements/Achievements'
import Education from '../Education/Education'
import ProgramSkills from '../ProgramSkills/ProgramSkills'
import Strengths from '../Strengths/Strengths'

const RightSection = () => {
  return (
    <div style={{marginLeft:'20px'}}>
      <ProgramSkills />
      <Strengths />
      <Achievements />
      <Education />
    </div>
  )
}

export default RightSection