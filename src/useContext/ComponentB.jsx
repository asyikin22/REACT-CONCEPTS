import React, {useContext} from 'react'
import { UserContext } from './ComponentA.jsx'

import ComponentC from './ComponentC'

import styles from './Context.module.css'

function ComponentB() {

    const user = useContext(UserContext)
     
    return(<div className={styles.box}>
        <h1>Component B</h1>
        <h2 className={styles.textB}>{`Hello again, ${user}`}</h2>
        <p className={styles.textB}>Component A is my provider</p>
        <p className={styles.textB}>I am the consumer component, just like D is!</p>
        <ComponentC />
    </div>)
}

export default ComponentB