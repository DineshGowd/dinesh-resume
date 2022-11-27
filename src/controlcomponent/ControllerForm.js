import React, { useState,useEffect } from 'react'

const ControllerForm = () => {
    const [name,setName] = useState('');
    const [age,setAge] = useState(0);
    const [hairColor,setHairColor] = useState('');

    useEffect(()=>{
        if(name.length <4){
            console.log('Name must be 4')
        }
    },[name])

    return (
        <div>
            <form>
                <input name="name" type="text" placeholder="Name" value={name} onChange={(e)=> setName(e.target.value) } />
                <input name="age" type="number" placeholder="Age" value={age} onChange={(e)=> setAge(e.target.value) } />
                <input name="hairColor" type="text" placeholder="Hair Color" value={hairColor} onChange={(e)=> setHairColor(e.target.value) } />
                <input type="submit" value="Submit Form" />
            </form>
        </div>
    )
}

export default ControllerForm