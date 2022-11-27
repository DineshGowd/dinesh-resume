import React, { useState } from 'react'
import ControlledModal from './ControlledModal';
import ControlledOnboard from './ControlledOnboard';
import UncontrolledModal from './UncontrolledModal'
import UncontrolledOnboard from './UncontrolledOnboard';

const StepOne = ({ goToNext }) => (
    <>
        <h1>Step 1</h1>
        <button onClick={() => goToNext({ name: 'john' })}> Next </button>
    </>
)

const StepTwo = ({ goToNext }) => (
    <>
        <h1>Step 2</h1>
        <button onClick={() => goToNext({ age: 60 })}> Next </button>
    </>
)

const StepThree = ({ goToNext }) => (
    <>
        <h1>Step 3</h1>
        <p>You are Qualified for the next round . </p>
        <button onClick={() => goToNext({})}> Next </button>
    </>
)

const StepFour = ({ goToNext }) => (
    <>
        <h1>Step 4</h1>
        <button onClick={() => goToNext({ hairColor: 'Grey' })}> Next </button>
    </>
)

const ShowModal = () => {
    // const [shouldShowModal, setShouldShowModal] = useState(false);

    const [onboardingData, setOnboardingData] = useState();
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNext = (stepData) => {
        setOnboardingData({ ...onboardingData, ...stepData });
        setCurrentIndex(currentIndex + 1);

    }
    return (
        <div>
            {/* <UncontrolledModal >
            <h1> I am UncontrolledModal </h1>
            </UncontrolledModal> */}
            {/* --------- */}
            {/* <button onClick={() => setShouldShowModal(!shouldShowModal)}>let me show !</button>

            <ControlledModal shouldShow={shouldShowModal} onRequestClose={() => {
                setShouldShowModal(false)
            }}>
                <h1>I am ControlledModal </h1>
            </ControlledModal> */}
            {/* --------- */}
            {/* <UncontrolledOnboard onFinish={data=>{
                console.log(" Finished Data",data);
                alert('Finished OnBoarding')
            }}>
                <StepOne />
                <StepTwo />
                <StepThree />
            </UncontrolledOnboard> */}

            <ControlledOnboard currentIndex={currentIndex} onNext={goToNext} >
                <StepOne />
                <StepTwo />
                {onboardingData?.age >= 60 && <StepThree />}
                <StepFour />
            </ControlledOnboard>
        </div >
    )
}

export default ShowModal