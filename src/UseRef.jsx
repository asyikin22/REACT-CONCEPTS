import React, {useState, useEffect, useRef} from 'react'

function MyComponent() {

    // let [number, setNumber] = useState(0)

    const inputRef1 = useRef(null)
    const inputRef2 = useRef(null)
    const inputRef3 = useRef(null)

    useEffect(() => {
        console.log('Component is rendered')
    })

    function handleClick1() {
        inputRef1.current.focus()
        inputRef1.current.style.backgroundColor = "salmon"
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick2() {
        inputRef2.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = "salmon"
        inputRef3.current.style.backgroundColor = ""
    }

    function handleClick3() {
        inputRef3.current.focus()
        inputRef1.current.style.backgroundColor = ""
        inputRef2.current.style.backgroundColor = ""
        inputRef3.current.style.backgroundColor = "salmon"
    }

    return(<div>
            <button onClick={handleClick1}>Button 1</button>
            <input ref={inputRef1}/> <br/>

            <button onClick={handleClick2}>Button 2</button>
            <input ref={inputRef2}/> <br/>

            <button onClick={handleClick3}>Button 3</button>
            <input ref={inputRef3}/>
        </div>)
    
}

export default MyComponent