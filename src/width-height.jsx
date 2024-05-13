import React, { useState, useEffect } from 'react'

function WidthHeight() {

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight)

    useEffect(()=> {
        window.addEventListener("resize", handleSizeChange)
        console.log('Event Listener Added')
    })

    useEffect(() => { 
        document.title = `Size: ${width} x ${height}`
    }, [width, height])

    function handleSizeChange() {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
    }

    return(<>
        <p>Window Width: {width}pixels</p>
        <p>Window Height: {height}pixels</p>
    </>)
}

export default WidthHeight