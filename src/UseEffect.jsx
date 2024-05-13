import React, {useState, useEffect} from 'react'

function UseEffect () {

    const [count, setCount] = useState(0);
    const [color, setColor] = useState("blue")

    //runs only on mount when value changes
    useEffect(() => {
        document.title = `Count: ${count} ${color}`
    }, [count])


    function addNumber() {
        setCount(c => c+1);
    }

    function subtractNumber() {
        setCount(c => c-1);
    }

    function switchColor() {
        setColor(c => c === "blue" ? "brown" : "blue")
    }

    return(<>

        <p style={{color: color}}>Count:{count}</p>
        <button onClick={addNumber}>Add</button>
        <button onClick={subtractNumber}>Subtract</button> <br/>
        <button onClick={switchColor}>Change Color</button>
    </>)
}

export default UseEffect







// useEffect(() => {})             // runs after every re-redner
// useEffect(() => {}, [])         // runs only on mount
// useEffect(() => {}, [value])    // runs on mount + when value changes

