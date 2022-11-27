import React from 'react'
// ControlledOnboardflow

const ControlledOnboard = ({ children, onFinish, currentIndex, onNext }) => {
    const goToNext = (stepData) => {
        onNext(stepData)
    }

    const currentChild = React.Children.toArray(children)[currentIndex]

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, { goToNext })
    }
    return currentChild
}

export default ControlledOnboard