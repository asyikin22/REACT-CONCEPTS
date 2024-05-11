import React, { useState } from 'react'

function PhoneArray() {

    const [phones, setPhones] = useState([])
    const [phoneBrand, setPhoneBrand] = useState("")
    const [phoneModel, setPhoneModel] = useState("")
    const [phoneYear, setPhoneYear] = useState(new Date().getFullYear())

    function handleAddPhone() {

        const newPhone = {brand: phoneBrand, model: phoneModel, year: phoneYear}

        setPhones(p => [...p, newPhone])

        //reset input box
        setPhoneBrand("");
        setPhoneModel("");
        setPhoneYear(new Date().getFullYear());
    }

    function handleRemovePhone(index) {
        setPhones(p => p.filter((_, i) => i !== index))
    }

    function handleBrandChange(event) {
        setPhoneBrand(event.target.value)
    }

    function handleModelChange(event) {
        setPhoneModel(event.target.value)
    }


    function handleYearChange(event) {
        setPhoneYear(event.target.value)
    }
 
    return(<div>
            <h2>List of Phone Objects</h2>
            <ul>
                {phones.map((phone, index) => 
                <li key={index} onClick={() => handleRemovePhone(index)}>
                    {phone.brand} {phone.model} {phone.year}
                </li>)}
            </ul>


            <input type="text" value={phoneBrand} onChange={handleBrandChange}
                        placeholder="Add phone brand" /><br/>

            <input type="text" value={phoneModel} onChange={handleModelChange}
                        placeholder="Add phone model"/><br/>

            <input type="number" value={phoneYear} onChange={handleYearChange}
                        placeholder="Add phone year"/><br/>

            <button onClick={handleAddPhone}>Add phone</button>
    </div>)
}

export default PhoneArray