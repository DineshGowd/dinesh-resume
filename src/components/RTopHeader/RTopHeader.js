import React from 'react'
import profile from '../../assets/images/adarsh.jpg'
import { CiLocationOn, CiPhone, CiMail } from 'react-icons/ci';
import { useMediaQuery } from 'react-responsive'

const RTopHeader = (props) => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })

    console.log(profile)
    return (
        <div style={{ backgroundColor: 'black', color: 'white', height: '250px', display: 'flex', justifyContent: 'space-around', alignItems: 'center', borderRadius: "50%" }}>
            {!isTabletOrMobile && <>  <img src={profile} alt="Avatar" style={{ borderRadius: "50%", height: '110px', width: '110px' }}></img>
                <div style={{ display: 'flex', justifyContent: 'start', flexDirection: 'column' }}>
                    <h1 style={{ padding: isTabletOrMobile? '100px' : '0', margin: '0' }}>ADARSH K MOHAN</h1>
                    <h2 style={{ padding: isTabletOrMobile? '100px' : '0', margin: '10px 0px' }}>Software Tester</h2>
                    <div style={{ display: 'flex', padding: '0', margin: '0' }}><pre><CiLocationOn fill="white" fontSize='20px' style={{ margin: '-5px 0' }} /> Bangalore, India <CiPhone fill="white" fontSize='20px' style={{ margin: '-5px 0' }} /> +91-7031422406 <CiMail fill="white" fontSize='20px' style={{ margin: '-5px 0' }} /> adarshakm98@gmail.com</pre> </div>
                </div>
            </>
            }
            {isTabletOrMobile && <>
                <div style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column' }}>
                    <h1 style={{ padding: '0 20px', margin: '20px 10px'  }}>ADARSH K MOHAN</h1>
                    <div style={{ padding: '0 10px', margin: '0' }}><pre style={{ padding: '0', margin: '10px 0' }}><CiLocationOn fill="white" fontSize='20px' style={{ margin: '-5px 0' }} /> Bangalore, India <CiPhone fill="white" fontSize='20px' style={{ margin: '-5px 0' }} /> +91-7031422406 </pre></div>
                    <div style={{ padding: '0 10px', margin: '0' }}><pre style={{ padding: '0', margin: '0' }}><CiMail fill="white" fontSize='20px' style={{ margin: '-5px 0' }} /> adarshakm98@gmail.com</pre> </div>
                </div>
            </>
            }
        </div>
    )
}

export default RTopHeader