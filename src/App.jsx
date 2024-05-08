import List from "./List"

function App() {

  const animals = [{id: 1, name:"Capybara", lifespan: 8, scientific: "Hydrochoerus hydrochaeris"}, 
                  {id: 2, name:"Hippopotamous", lifespan: 50, scientific: "Hippopotamus amphibius"}, 
                  {id: 3, name:"Blobfish", lifespan: 130, scientific: "Psychrolutes marcidus"}, 
                  {id: 4, name:"Alligator", lifespan: 50, scientific: "Alligator mississippiensis"}, 
                  { id: 5,name:"Llama", lifespan: 20, scientific: "Lama glama"}]

  const insects   = [{id: 1, name:"Bee", lifespan: "6 weeks", scientific: "Apis mellifera Linnaeus"}, 
                  {id: 2, name:"Ladybugs", lifespan: "1 year", scientific: "Coccinellidae"}, 
                  {id: 3, name:"Mosquito", lifespan: "10 days", scientific: "Culicidae"}, 
                  {id: 4, name:"Butterfly", lifespan: "2 weeks", scientific: "Lepidoptera"}, 
                  { id: 5,name:"Mantis", lifespan: "12 months", scientific: "Mantodea"}]
  
  return( <>
                    
    <List items={animals} category="Animals"/>
    <List items={insects} category="Insects"/>
          
         </>)

}

export default App


