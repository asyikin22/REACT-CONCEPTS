import React, {useState, createContext} from 'react'
import ComponentB from './ComponentB'
import styles from './Context.module.css'

export const UserContext = createContext()


function ComponentA() {

    const [user, setUser]= useState("Asyikin")
     
    return(<div className={styles.box}>
        <h1>Component A</h1>
        <h2 className={styles.textA}>{`Hello, ${user}`}</h2>
        <p className={styles.textA}>I am the provider component</p>
        <UserContext.Provider value={user}>
            <ComponentB />
        </UserContext.Provider>
        
    </div>)
}

export default ComponentA

