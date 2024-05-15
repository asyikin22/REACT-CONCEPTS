import ComponentD from './ComponentD'

import styles from './Context.module.css'

function ComponentC() {
     
    return(<div className={styles.box}>
        <h1>Component C</h1>
        <ComponentD />
    </div>)
}

export default ComponentC