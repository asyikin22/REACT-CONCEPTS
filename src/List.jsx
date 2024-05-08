

function List(props) {

    const category = props.category;
    const itemList = props.items;

    const listItems = itemList.map(item => <li key={item.id}>
                                           {item.name}: &nbsp;
                                           <b>{item.scientific}</b></li>)

    return (
            <> 
            
            <h3 className="list-category">{category}</h3>
            <ul className="list-item">{listItems}</ul>
            
            </>)
}

export default List













    // animals.sort((a,b) => a.name.localeCompare(b.name)) //ALPHABETICAL
    // animals.sort((a,b) => b.name.localeCompare(a.name)) // REVERSE ALPHABETICAL
    // animals.sort((a,b) => a.lifespan - b.lifespan) //NUMERIC ORDER
    // animals.sort((a,b) => b.lifespan - a.lifespan) //REVERSE NUMERIC ORDER

    

    // const listItems = animals.map(animal => <li key={animal.id}>
    //                                             {animal.name}: &nbsp;
    //                                             <b>{animal.lifespan}</b></li>)


        // const lowLifespan = animals.filter(animal => animal.lifespan <= 50) //Low life span
    
    // const longLifespan = animals.filter(animal => animal.lifespan > 50) //long life span

    // const listItems = longLifespan.map(longLifespan => <li key={longLifespan.id}>
    //                                                  {longLifespan.name}: &nbsp;
    //                                                  <b>{longLifespan.lifespan}</b></li>)