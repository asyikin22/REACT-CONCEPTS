import Staff from './Staff.jsx'

function App() {

  return(

    <>
      <Staff name="Asyikin" role="Programmer" age={20} isEmployee={true}/>
      <Staff name="Lily" role="n/a" age={25} isEmployee={false}/>
      <Staff name="Austin" role="Chief Technology Officer" age={38} isEmployee={false}/>
      <Staff name="Liam" role="HR Manager" age={33} isEmployee={true}/>
      <Staff name="Roger" role="n/a" age={52} isEmployee={false}/>
      <Staff name="Sonia" role="Director" age={47} isEmployee={true}/>
      <Staff />
    </>
    
  )

}

export default App


