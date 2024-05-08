
function ButtonEvent () {

    const handleClick = (e) => 
        e.target.textContent = "Mitochondria is the powerhouse of the cell 🥒"

    return(<button onClick={(e) => handleClick(e)}>Press Here 😊</button>);

}

export default ButtonEvent





    // const handleClick2 = (name) => console.log(`Hello there beautiful ${name}🌸`)


        // let count = 0;

    // const handleClick = (name) => {
    //     if(count < 5) {
    //         count++;
    //         console.log(`You click me ${count} time/s, ${name}`)
    //     } else {
    //         console.log(`${name}, you're clicking me too much sis. Calm down`)
    //     }
    // }



