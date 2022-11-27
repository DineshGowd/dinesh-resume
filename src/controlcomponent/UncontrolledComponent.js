import React from 'react'

const UncontrolledComponent = () => {
    const nameInput =  React.createRef();
    const ageInput =  React.createRef();
    const haircolorInput =  React.createRef();
    const handleSubmit = (e) => {
        console.log(nameInput.current.value)
        console.log(ageInput.current.value)
        console.log(haircolorInput.current.value)
        e.preventDefault()
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input name="name" type="text" placeholder="Name" ref={nameInput} />
                <input name="age" type="number" placeholder="Age" ref={ageInput}/>
                <input name="hairColor" type="text" placeholder="Hair Color" ref={haircolorInput}/>
                <input type="submit" value="Submit Form" />
            </form>
        </div>
    );
}

export default UncontrolledComponent