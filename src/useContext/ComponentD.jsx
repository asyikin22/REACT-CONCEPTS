import React, {useContext} from 'react'
import { UserContext } from './ComponentA.jsx'
import styles from './Context.module.css'

function ComponentD() {

    const user =useContext(UserContext)
     
    return(<div className={styles.box}>
        <h1>Component D</h1>
        <h2 className={styles.textD}>{`See you later, ${user}!`}</h2>
    </div>)
}

export default ComponentD

