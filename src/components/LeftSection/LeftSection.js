import React from 'react'
// import Achievements from '../Achievements/Achievements'
// import Education from '../Education/Education'
import ProfileDesc from '../ProfileDesc/ProfileDesc'
import WorkExperience from '../WorkExperience/WorkExperience'

const LeftSection = () => {
  return (
    <div style={{ marginTop: '20px', marginRight: '20px' }}>
      <ProfileDesc />
      <WorkExperience />
    </div>
  )
}

export default LeftSection