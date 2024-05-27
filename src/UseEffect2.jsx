import React, { useState, useEffect } from 'react'

const UseEffect2 = () => {

    const [counter, setCounter] = useState(0)

    //Wrap function inside effect hooks, add empty array as 2nd argument
    useEffect(() => {
        const intervalId = setInterval(() => {
            setCounter(count => count + 1)
        }, 1000)

        //cleanup function to clear the interval
        //store intervalid in a variable when 'setInterval' is called
        return () => {
            clearInterval(intervalId)
        }
    }, [])

  return (
    <div>
      <p>{counter} seconds have passed</p>
    </div>
  )
}

export default UseEffect2
