import React, {useState} from 'react'

function MyComponent() {

    const [name, setName] = useState("nobody")
    const [age, setAge] = useState(0)

    const updateName = () => {
        setName("Asyikin")
    }

    const incrementAge = () => {
        setAge(age+1)
    }

    return ( <div>
                <p>Name: {name} </p>
                <button onClick={updateName}>Update Name</button>

                <p>Age: {age} </p>
                <button onClick={incrementAge}>Increment Age</button>
            </div>)

}

export default MyComponent
