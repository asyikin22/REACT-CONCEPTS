import React, { useState } from 'react'

function Phone() {
    
    const [ phone, setPhone ]= useState({ brand: "Samsung",
                                          model: "Galaxy A12",
                                          year: 2020,
                                        }) 

    
    // onChange event handler
    function handleBrandChange(event) {
        setPhone(p => ({...p, brand: event.target.value}))
    }

    function handleModelChange(event) {
        setPhone(p => ({...phone, model: event.target.value}))
    }

    function handleYearChange(event) {
        setPhone( p => ({...phone, year: event.target.value}))
    }

    return(<div>
        <p>I am currently using: <b>{phone.brand} {phone.model} {phone.year}</b></p>

        <input type="text" value={phone.brand} onChange={handleBrandChange}/>
        <input type="text" value={phone.model} onChange={handleModelChange}/>
        <input type="number" value={phone.year} onChange={handleYearChange}/>

    </div>)

}

export default Phone