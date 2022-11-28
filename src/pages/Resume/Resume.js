import React from 'react'
import Download from '../../components/Download/Download'
import ResumeLayout from '../../components/ResumeLayout/ResumeLayout'

const Resume = () => {
  return (
    <div>
        <ResumeLayout />
       {true && <Download /> }
    </div>
  )
}

export default Resume