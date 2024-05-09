import React, {useState} from 'react'

function Form() {

    const [name, setName] = useState("Stranger Danger")
    const [quantity, setQuantity] = useState(1)
    const [comment, setComment] = useState("")
    const [region, setRegion] = useState("")
    const [subscribe, setSubscribe] = useState("")

    //Callbacks to onChange event handler

    function handleNameChange(event) {
        setName(event.target.value)
    }

    function handleQuantityChange(event) {
        setQuantity(event.target.value)
    }

    function handleCommentUpdate(event) {
        setComment(event.target.value)
    }

    function handleRegionChange(event) {
        setRegion(event.target.value)
    }

    function handleSubscribeChange(event) {
        setSubscribe(event.target.value)
    }

    return (<div>

        <input value={name} onChange={handleNameChange} />
        <p>Name: {name} </p>

        <input value={quantity} onChange={handleQuantityChange} type="number"/>
        <p>Quantity: {quantity} </p>

        <textarea value={comment} onChange={handleCommentUpdate} 
        placeholder="Please type your comment here"/>
        <p>Comment: {comment}</p>

        <select value={region} onChange={handleRegionChange}>

            <option value="">Select a region</option>
            <option>Not from Earth 👽</option>
            <option>Asia</option>
            <option>Europe</option>
            <option>Middle East</option>
            <option>North America</option>
            <option>South America</option>
            <option>Africa</option>
            <option>Oceania</option>
            <option>Antarctica</option>
    
        </select>
        <p>Region: {region}</p>

        <label>
            <input type="radio" 
                   value="Yes, please send me newsletter 😊"
                   checked={subscribe === "Yes, please send me newsletter 😊"}
                   onChange={handleSubscribeChange}/>
            Yes, please send me newsletter 😊
        </label>

        <label>
        <input type="radio" 
                   value="No, please don't spam my inbox 🥺"
                   checked={subscribe === "No, please don't spam my inbox 🥺"}
                   onChange={handleSubscribeChange}/>
            No, please don't spam my inbox 🥺
        </label>

        <p>Subscribe: {subscribe}</p>

    </div>)
}

export default Form