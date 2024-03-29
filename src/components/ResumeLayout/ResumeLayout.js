import React from 'react'
import SplitScreen from '../../Layouts/Split/SplitScreen'
import LeftSection from '../LeftSection/LeftSection';
import RightSection from '../RightSection/RightSection';
import RTopHeader from '../RTopHeader/RTopHeader';
import { useMediaQuery } from 'react-responsive'

const ResumeLayout = () => {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  return (
    <div>
      <SplitScreen fcdirection='column' fcmargin="0px 0px" fpblcolor="black" fborderradius='25px' fprborderradius='25px 25px 0px 0px' >
        <RTopHeader name="Header" />
        <div>
          <SplitScreen fborderradius='0px 0px 25px 25px' fcmargin={isTabletOrMobile ? "0px 20px" : "0px 50px"} fcdirection={isTabletOrMobile ? 'column' : 'row'}>
            <LeftSection />
            <RightSection />
          </SplitScreen>
        </div>
      </SplitScreen >
    </div >
  )
}

export default ResumeLayout