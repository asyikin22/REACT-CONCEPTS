import React, {useState} from 'react'
function Country() {

    const [countries, setCountries] = useState(["Malaysia", "Thailand", "Indonesia"])

    function handleAddCountry () {

        const newCountry = document.getElementById("countryInput").value;
        document.getElementById("countryInput").value = "";

        setCountries(c => [...c, newCountry]);
    }

    function handleRemoveCountry (index) {
    
        setCountries(countries.filter((_, i) => i !== index))
    
    }

    return (<div>
            <h2> List of Countries</h2>
            <ul>
                {countries.map((countries, index) => 
                <li key={index} onClick={()=>handleRemoveCountry(index)}>{countries}</li>)}
            </ul>

            <input type="text" id="countryInput" placeholder="Add a country" />
            <button onClick={handleAddCountry}>Insert Country</button>
        </div>)

}

export default Country