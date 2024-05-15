# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# CARD COMPONENT

**Create Card.jsx file**
* Create Card function
* Write return statement
* Write export statement

**Inside Card.jsx create a div with className (Note that 'class' is a reserved keyword, we can't use it)**
* Image
* Header
* Paragraph

**Import card component to App.jsx**
* Type import, name of component, from, location of folder
* Write a return statement
* Write export statement

**Find an image for profile picture and save it inside src > assets folder**
* Import image into Card.jsx file
* Import profilePic from asset folder
* Include profile pic inside img element using curly braces

**Edit the size of image inside index.css**
* delete everything - the content in this file is what React set up for us by default.
* Style accordingly

**END RESULT:**

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/9a2791e7-fd80-4cfa-aec9-f61ed565f712)

# CSS STYLING

**METHOD COVERED**
* External - Great for global styles or small projects
* Modules - preferred for individual components that have their own unique styles
* Inline - Good for any small components with minimal styling

-----------------
**EXTERNAL CSS**
-----------------

**Go to src folder, create a Button.jsx component**
* Create Button function component
* Add className button
* Return a single button element
* Export it to App.jsx

**Import button component to App.jsx.**
* Type import, name of component, from, location of folder

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/91f67f40-b460-45da-bab0-49ba7c4fb241)

------------
**MODULES**
------------

**Why use Modules?**
* With modules, we don’t have to worry about naming conflicts.
* A unique class will be generated for you via a hashing algorithm (_button_1br64_3)
  
![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/39ead24b-46a2-4086-ad67-b237731d337d)

**Step-by-step:**
* Create a button folder inside src folder, move the Button.jsx file into it
* Create a CSS stylesheet within button folder - Button.module.css
* Add styling inside Button.module.css
* Import the new CSS file into Button.jsx to apply styling.
* Write import, styles, from, name of the CSS folder
* Inside the function button, assign value of className to styles.button wrapped in curly braces 

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/3aee3931-305e-49d6-b145-501c810fcb8f)

-----------------
**INLINE STYLE**
-----------------

**Why do we use inline style?**:
* Convenient and easy to understand
* It prevents Global style conflicts as we are not working with classNames
* It's great for isolated components with minimal styling (like button or subscribe button)
* BUT it is less maintainable in large applications and reduces readability of components
* NOT GREAT for complex styling i.e. responsive SS

**Step by step:**
* Inside Button.jsx file, create a JS object named 'styles'
* Insert all the styling inside curly braces {}
* We cannot use dash, switch the spelling of property to camel case
* All values should be string
* Each property should be separated by comma
* Inside return statement, we will insert a dynamic value, style object that contains all the CSS properties

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/1cd008c5-c916-47cd-9772-d694d2cf75e8)

# PROPS

**WHAT IS IT?**
* A read only properties that are shared between components
* A parent component can send data to a child component
* component key=value

---------------------
**SINGLE COMPONENT**
---------------------

**Staff.jsx file**
* Create an employee component to display employee data - Staff.jsx
* Create a function Staff
* Write an export default statement
* In order for component to accept props, the function needs a 'prop' parameter - it’s a JS object
* Write a return statement
  1) Add div, include paragraph element
  2) Add text 'Name' and colon (:)
  3) Include a set of curly braces {} to inject JavaScript
  4) Take object 'props' and chain it to name property
* Add more properties like age, employment status
* For Boolean operator, we need to use ternary operator

**App.jsx**
* Import Staff component to App.jsx
* Student.jsx is the child
* App.jsx is the parent
* We need to list key value pairs (name="Asyikin")
* When we send a key value pairs to a component, they are all stored within props object
* To the value associated with the key, you type props.name
* Add another key value pair, age. Note that if value is not a literal string, we have to wrap it inside curly braces
* Add some styling inside index.css

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/e51568eb-a28a-468b-a7d9-396a12c4c2a2)

-----------------------
**MULTIPLE COMPONENTS**
-----------------------

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/1e97b5f0-6d7c-40a7-a026-306d84bd34fc)

-------------
**propType**
-------------

**What is it?**
* A mechanism that ensures that the passed value is of the correct data type
* i.e. age: PropTypes.number
* React can emit a warning within our console mostly for debugging purpose
* However it will not stop the app from running

**Step-by-step**
* Inside Staff.jsx file, type the name of the component, chain it to .propTypes
* Import PropTypes from node modules and assign the value inside curly braces.
* Include the prop types of each property
* Note: It needs to be written OUTSIDE of return statement

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/580a6653-0ad9-482c-b062-aa2e7cb868f5)

-------------
**DEFAULT PROPS**
-------------

* Default values for props in case they are not passed from the parent component
* Inside Staff.jsx, write Staff.defaultProps, assign the value to whatever we like
* Inside App.jsx, create a new staff component, but don’t pass in any props

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/6f774072-eded-419d-8fc3-7de193df19d9)


# CONDITIONAL RENDERING

**WHAT IS IT?**:
- It allows you to control what gets rendered in your application based on certain conditions
- Show, hide, or change components

**STEP BY STEP**:
* Go to src folder and create Greeting.jsx file
  - Add Greeting function component with props as argument
  - Write export statement
* Go to App.jsx and return the greeting component
  - Using props we will send two key value pairs - isLoggedIn and username
  - Import greeting
* Go to Greeting.jsx and see if we are logged in
  - Inside the return statement, use an if statement that will return 'Welcome <username>' on the browser
  - Or if the value for isLoggedIn was false, an error message will be prompt accordingly
* Style it in index.css - give the h2 responses class name and style them accordingly

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/07e1a955-101b-44a3-aab7-240b5d7c2804)

**HOW TO IMPROVE CODES READIBILITY?**:
* A ternary operator- We can simplify this more by storing the messages in constant
* Add prop types property - for debugging
* Add default props property in case username is not inputted.

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/1e083969-59d6-443d-a888-d0f987c3265b)

# RENDER LIST

**STEP BY STEP**
* Go to src folder and create a List.jsx file
  - Create a function component
  - Write an export statement
  - Create a list of animals and store them in a constant
  - Return array of animals

* App.jsx
  - Import the animal list component
  - Return the List inside function app
  - Browser will return one big string - CapybaraHippopotamousBlobfishAlligatorLlama

--------------------
**ARRAY OF STRINGS**
--------------------

**Go back to List.jsx file**
- Use built-in map method to create a new array of lists item
- Pass an arrow function
- Return an unordered list

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/44306970-7fdc-4338-985f-c40c9c057de4)


--------------------
**ARRAY OF OBJECTS**
--------------------

- We will convert array of strings into array of object
- Each object will have a name property and its scientific names
- Enclose elements inside curly braces to turn them into objects
- Add name property and the scientific name
- Inside the arrow function, chain animal to name in the list.
- However this will return an error

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/c43edf6a-c23c-4e53-a72a-7d49a875d3ba)

--------------------
**KEY-ID**
--------------------
* React will want us to assign a key to each list item and each key should be unique
* In the array of objects, we will set the key attributes to equal animal.name
* In real world application, we want to assign a unique ID to object - set the key to be each ID
* This is important because two objects may share the same name 

--------------------
**SORT OBJECTS**
--------------------

	• Let's now display the scientific name next to animals' name
		→ Create a space by typing &nbsp
		→ Insert JavaScript - animal.scientific for the scientific name 
		
	• Sort object by using sort method()
		→ custom sorting function (a, b), a is for the first item, b is for the second
		→ Then we iterate over the entire array
		→ Use an arrow function (a.k.a. DO SOMETHING) 
		→ Sort the strings accordingly 
		
	• Sort alphabetically:
		→ Take the name property and use the built-in localCompare() method to b.name
		→ animals.sort((a,b) => a.name.localeCompare(b.name))
		
	• Sort reverse alphabetical 
		→ Replace a with b and b with a
		→ animals.sort((a,b) => b.name.localeCompare(a.name))
		
	• Sort by lifespan (ascending)
		→ animals.sort((a,b) => a.lifespan - b.lifespan)
		
	• Sort by lifespan (descending)
		→ Replace a with b and b with a
       → animals.sort((a,b) => b.lifespan - a.lifespan)


  ![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/095ee399-f4f2-49db-903c-697e8ad595f7)

--------------------
**FILTER OBJECTS**
--------------------
- Create new array of animals that have short lifespan lowLifespan
- Set it to be equal to original array and use built-in filter method with paramater animal
- Examine each animal in the animals array with arrow function
- Set a condition, filter animal that has lifespan less than or equal to 50 and add it into the new array - lowLifespa
- Display the new array using map() method, replace the original instance of 'animal' with 'lowLifespan'

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/f59c3a46-2a84-44a2-8395-1d8902b69f22)

--------------------
**REUSABLE LIST COMPONENT**
--------------------
**App.jsx (parent component)**
- Now we are going to transform list component so it's reusable with different lists
- Cut array of animals from Animals.jsx into function app in App.jsx (just above return statement)
- Inside return statement, insert JavaScript - animals, add a category
- Send all the data from parent component to list component (child)

**List.jsx (Child component)**:
- Set up props within list function
- Create a const itemList, set it equal to props.items
- Replace animals with itemList
- Add a category
- Return an h3 element that displays category of the list
- Insert JavaScript constant category inside a curly braces
- Remember to enclose the ul list and h3 elements inside tags

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/ca93233f-2d59-49d5-84b9-a4d962705b46)

--------------------
**CREATE NEW LIST USING REUSABLE COMPONENT**
--------------------

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/19dfc59b-27a8-42e1-9f6f-da2e3ef0ad83)

**CSS STYLING**
* Add class Names
* Style the element inside index.css
* End-result:

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/01227fa3-7eca-450c-b4d9-30eaa5ad2b42)

**IMPROVE READABILITY**
- Conditional rendering
- prop types
- default props

# CLICK EVENTS

**WHAT IS IT?**:
* An interaction when a user clicks on a specific element
* We can respond to the click by passing a callback to the onClick event handler

--------------------
**ONCLICK ATTRIBUTE**
--------------------
**Button-event file (child component)**
* Go to src folder and create a button-event component
* Create a function component inside
* Write a export default statement
* Return a single button element
* Inside return statement, set the onClick event handler equal to a callback to handleClick function (see the next step)
* When we go to the browser and click on button, the message will be displayed on console.

**Add JS event handler-onClick - create an inner function**
- Set onClick to JS callback
- Write an inner function inside button function
- Const handleClick and assign it equal to arrow function
- As we all know arrow function indicates 'DO SOMETHING'
- Log the word 'YEAY' when button is pressed.

**App.jsx file (parent component)**
- Import button-event file from its location
- Return a button component in the function app

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/03c2e889-8a52-49aa-8292-b284e9ceabbc)

--------------------
**ONCLICK WITH PARAMETER**
--------------------

- Create a second function const handleClick2
- It will have parameter of name
- Use an arrow function to console.log message with the name
- For onclick event handler inside return, set a callback of handleClick2
- If we have an arguments we need to send to a function, wrap the callback within an arrow function
- Pseudo code for arrow function = When we click on the button, do this 

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/e60e011e-d028-40fc-95e0-f6d985b33f1f)

--------------------
**ONCLICK + CONDITIONS**
--------------------
* Set the onClick attribute to be a callback to handle click
* Add a count variable set it to zero.
* Insert name parameter inside the handleClick function
* What we would like to do?
  - Check if the count variable is less than 5
  - If it is less than 5, increase the count by 1
  - Log message to the console the number of time clicked (<5)
  - If the user clicks too many times (>5), send a message accordingly

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/ac0ddb7e-ad48-44e8-ba8b-a4faaf15c70f)

**EVENT PARAMETER**
* Create a variable const handleClick, set it equal to event (e)
* Click events were automatically provided with an event argument
* It's an object that describes the event that occurred
* Print event by logging it the console inside the arrow function
* Inside the return statement, we need to wrap the event in arrow function
* 'e' for parameter in onClick and 'e' for handleClick function

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/c5a5386f-fd46-4f70-beeb-2c109ff42a8f)

--------------------
**HOW TO UTILIZE EVENT OBJECT?**
--------------------
* Change the text content of the button
* Go to 'target' property, look for 'textContent' inside the console
* Go to our button event file, access that event object using dot(.) the property accessor and select textContent.

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/07c67c74-2e0b-46d9-b500-008875169073)

# useState() HOOK

**WHAT IS IT?**:
- It is a special function that allows functional components to use React features w/o writing class component
- Other hooks: useState, useEffect, useContext, useReducer, useCallback

**useState()**:
* A React hook that allows the creating of a stateful variable AND a setter function to update its value in the Virtual DOM
* Value: [name, setName]
* A stateful variable is whose value can change over time as a result of user interactions (clicking the button)
* React manages its changes and re-renders accordingly.
* When we include this hook, we will be given an array of 2 elements
* We will use array destructuring to create a stateful variable and a setter function to update that variable.

**Object vs Array destructuring in React:**

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/6fcc4238-c94a-4de3-9648-f711ce706d98)

------------------------
**HOW TO USE useState() FUNCTION?**
------------------------

**Go to src folder and create a MyComponent.jsx file**
* Create a function component
* Write export default statement
* Import React library from its location and use object destructuring because we don’t need the entire library

**App.jsx**:
* Import MyComponent from its file path
* Return it inside the function

**How to use a useState function**
* Create a stateful variable and a set function to update that variable
* Declare a const, use […] for array destructuring
* Set it equal to useState function - it will return an array with two elements - variable and setter function
* Create a stateful variable for 'name' and write the provided 'setter function'
* Inside return, create a paragraph name and a button with onClick attribute named Update Name
* Create an update function to update name - Use an arrow function that will return name using setName

**What happens in the background?**
* When the stateful variable gets updated with the setter function, it triggers the re-render of the virtual DOM
* With the use of useState() function, you can pass an initial state.

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/eb1d75b9-4d1e-436b-82a1-e7ee110b8ca5)

**Add increment feature (Add age)**
* Create an age variable and increment it
* Declare a const variable
* Use array destructuring [stateful variable, setter function] = [age, setAge]
* Set it equal to use state to set its initial value
* Inside return statement, create a paragraph for 'age', inserting JS {age}
* Create a button function to increment age
* Outside return statement, create a new variable to increment age
* Use setAge function, takes age + 1 as its argument.

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/048ecc9e-c4c5-4150-8138-1e5a68b824e8)

------------------------
**COUNTER APPLICATION**
------------------------

**Go to src folder and create a Counter.jsx file**
* Create a function component
* Write export default statement
* Import React library from its location and use object destructuring because we don’t need the entire library

**App.jsx**
* Import Counter.jsx from its file path
* Return it inside the function

**How to use useState() function - counter**
* Declare a variable using array destructuring, create a stateful variable and its setter function
* Set its initial value using useState()
* Create new functions to increment, decrement and reset counter
* Return elements inside return statement
  - A p element to display the number
  - 3 buttons represent increment, decrement and reset buttons
  - The onClick attribute will get the JS function from the variable we declared initially
* Style it in the index.css file 

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/aa83a461-1853-470c-bfdd-6d45750a7e89)


# ONCHANGE EVENT HANDLER

**WHAT IS IT?**:
* It is an event handler used primarily with form elements
* Example: input, text area, select, radio
* It triggers a function every time the value of the input changes

------------------------
**INPUT TEXT & NUMBER**
------------------------
**Form.jsx**
- Import React library from its location and use object destructuring to extract useState function
- Create a variable name with setter function, setName
- Set it equal to useState() to set its initial value - empty string
- Return a div element
  * Create an input element
  * Set the value of input to JS stateful name variable
  * Set the event handler onChange function to equal to a JS function that handles name change (function handleNameChange)
- Include para element, Name - when I input a name, it will update in real time - Set name equal to JS 'name'
- Include another para element, quantity - onChange event handler will be the callback to JS function

**function handleNameChange - to handle name change**:
* This is to be used inside return function
* Create a function, take 'event' as parameter - this will be provided to us
* When we change the value of input element, we will invoke the setName function
* Set name variable to be - access event object, access target, get the value property (using property accessor)

**Function handle - handle input number**
* Create a quantity variable and its setter function = [quantity, setQuantity] - this is a callback
* Set it equal to useState, pass 1 as parameter to set initial value.
* Create a function to handle quantity change - event parameter is given to us
* The parameter of setQuantity - access event object, access target, get the value property (using property accessor)
* This function will provide a callback to onChange event handler

**What happens in the background?**
- The onChange event handler triggers a function every time the value of the input changes.

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/816fd330-13fb-4ee8-98e4-331e7ac03acb)

------------------------
**TEXT AREA**
------------------------

- Create a text area variable and the setter function = [comment, setComment]
- Create a function handleCommentUpdate. Remember, the event is provided, we only have to access their properties and set them as parameters
- Add our HTML element inside return statement
  * Value = comment variable
  * onChange event handler set equal to callback to handleCommentUpdate
  * Placeholder
  * Insert a para element to display the written comment

 ![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/09274a7d-d5c0-41a6-a731-7ceeb8d6f013)

------------------------
**SELECT OPTION**
------------------------

- Create a dropdown menu for Region to indicate where the users live on this lovely earth.
- Create a region variable and the setter function = [region, setRegion]
- Create a function handleRegionChange, event as parameter, use setter function to access event, target and its value
- Add HTLM element
  * Select tags
  * Value = region variable
  * onChange = callback to handleRegionChange function
  * Include option element to allow users to select option
  * Set 'select a region' option as default value. Set it equal to empty strings
  * Add a para element to display region stateful variable
 
  ![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/ced1e805-da48-433d-88fe-9f3e76e88102)

------------------------
**RADIO BUTTON**
------------------------
- We will give an option to user if they want to subscribe to our newsletter or not
- Create a subscribe variable and its setter function setSubscribe
- Create a function handleSubscribeChange, event as parameter, use setter function to access event, target and its value
- Add HTML element
  * Create a label element that provides option to subscribe to newsletter and not to subscribe
  * Create input element within label, set type to be 'radio', set value to 'subscribe'
  * Check if the subscribe stateful variable is strictly equal to the value of users who want OR don’t want to subscribe
  * If the value is true it will trigger onChange event handler and set it equal to JS function handleSubscribeChange
  * Add a para element to display the selected subscription option. Set it equal to JS function {subscribe}

 ![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/bccd9d98-8b92-437d-8d76-1b0960c7d57d)

  # UPDATE OBJECT IN STATE

----------------
**Step-by-Step**
----------------

**Import react, create function component, set initial value with useState() hook**
- Import useState() hook from react
- Create state variable using array destructuring + set setter function
- Set initial state with useState - JS Object: brand, model, year

**Add HTML element**
- Add div element to wrap everything
- Add para element that includes JS brand, model, year
- Add input value - type and value
- Add onChange functions inside input element, set it to appropriate callback functions

**onChange event handler**
* Accept callbacks to some function
* Create a function handleBrandChange, event as parameter, use setter function to access event, target and its value
* Use updater function - set the phone into JS object and use spread operator to indicate change from previous state to next state
  1) This function will allow for safe update
  2) We don’t want to modify the current state of phone, rather make a reference to the previous state
  3) Turn object to be a part of an arrow function
  4) Enclose object within bracket after the arrow sign
  5) We can change 'phone' to 'p' to indicate  previous state of phone instead of writing it in full

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/e29c9441-70e2-4a90-9990-df27a4fe8fef)


----------------
**RESULT**
----------------

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/fc88fa86-7946-4dc1-9f22-f0f6d2c802f2)

# UPDATE ARRAYS IN STATE

----------------
**Step-by-Step**
----------------

* Import useState hook from react using object destructuring
* Create stateful variable using array destructuring [] and set setter function
* Set initial value (useState) to be whatever

**Create a function to add element into arrays**:
- Create new constant, newCountry
- Access it using document.getElementById
- Access value using dot notation
- Reset the input box by grabbing the button's ID and set the value to empty string ".."
- Now use setter function to update array - pass newCountry as parameter
- Add spread operator to access the previous array 'countries'
- Create updater function to indicate the shift from previous state to the next state
- Shorthand countries to 'c'

**Create a function to remove element from arrays**:
- Set onClick event handler on the list item, it's equal to a call back to remove country
- When you click on a country, it will get deleted
- In order to pass argument to event handler, we need to create an arrow function with no parameter
- Pass on index number from map() method into handleRemoveCountry parameter
- Within the function, grab setter function. Use filter method of countries array
- With filter method, we are provided with (element, index)
- Change element into underscore - it indicates that we can ignore the parameter passed to the function.

**Add HTML element**
- Div element, h2 element, unordered list
- Inside UL, use map() method and pass on 'countries' and 'index' as parameter, this will appear automatically on the country list
- Create an arrow function - TO DO SOMETHING
- Create list item element - set key element equal to {index}
- Within each list item, we add current country element {country}
- Add input element to allow user to type in country
- Create button to submit input - add an onClick event handler set equal to callback to handle add country

----------------
**RESULT**
----------------

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/6a7587c6-83ea-457c-a276-1a9ff271f8c2)


# UPDATE ARRAYS OF OBJECTS IN STATE

**Create 4 state variables**
- phones (array of phones), initial state = empty string
- phoneBrand, phoneModel, phoneYear

**Create functions to:**
- Add phone
- Remove phone - parameter is index
- Change Brand - parameter is event
- Change Model - parameter is event
- Change year - parameter is event

**Add HTML element**
* Create a div element
* Create h2 element
* Create ul element
  1) this is where the added phone will be displayed on the list
  2) Use map method to return a new array
  3) To remove - add onClick event handler, pass an index (of the phone we want to remove) as argument
* Create input element for phone brand, phone model and year released
  - Each has type, value and onChange event handler assigned to it
* Create a button element to add phone - assign onClick handler equal to callback function handleAddPhone 

----------------
**RESULT**
----------------

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/a8ec2795-9143-4fe4-bb6a-1540c495913c)

# useEffect() Hook

**WHAT IS ITS?**:It tells react to do some code when -
1) This component re-renders
2) This component mounts - create and mount it to the DOM
3) The state of a value changes

**SYNTAX**
* useEffect(function, [dependencies])
  1) First argument: It can be callback, anonymous function or arrow function
  2) Second argument: array of dependencies
 
**HOW TO WRITE THE LOGIC**
1) Runs after every re-render - pass a function
2) Runs only on mount - pass an empty array of dependencies
3) Runs on mount + when value changes - pass an array of value

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/820644f2-3921-4004-8c48-65c6eedd95d3)

**WHEN TO USE IT?**
1) Event listeners
2) DOM manipulation
3) Subscriptions(real-times updates)
4) Fetching data from an API
5) Clean up when a component unmounts - remove it from DOM

----------------
**NO DEPENDENCIES**
----------------

**useSet() hook:**
* Create a function to add number, c+1
* Add onClick event handle on button element inside return statement

**useEffect() hook to update title**
* Call useEffect on top of useSet.
* There is only ONE argument = function
* Access title of document and set it equal to count number
  
![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/eec0f2e8-e26c-4281-977e-6e4cf7278543)

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/8ca53690-4242-44e2-affb-ffe219bae69a)

----------------
**EMPTY DEPENDENCY ARRAY**
----------------

* There is only ONE argument = function
* Access title of document and set it equal to count number
* Add empty array inside useEffect() hook function as the second argument.{first argument, []}
* It will only update the number on the app, NOT on the title of the document.
* Alternatively, we can set the title of document to text form as follows:

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/f69fd769-ec65-4d47-a248-90d5e693f4a4)

----------------
**ONE DEPENDENCY - CHANGES IN VALUE**
----------------
* Add subtract button and add onclick event handler to it
* Add 'count' as the second parameter inside the useEffect() hook function
* The title will change only when the value of the count change
* First argument will run, only if the second argument changes

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/8e020fc8-01fc-4fd0-98e2-47c915a77040)

----------------
**MULTIPLE DEPENDENCIES - CHANGES IN VALUE**
----------------
* Anytime of the two values change inside an array, the side code will be performed.
* Create a state color variable, using array destructuring set setter function setColor, set it equal to 'blue'
* Add onChange event handler to a new button element, set it equal to a callback function to switch color
* Create a new function to handle change of color
* Access the style attribute of para element and embed JS object - color, add another set of curly braces
* Set color = color state variable
* Add color property into the document title.

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/78822d3c-1c31-4eea-b0f9-1617742a7540)

----------------------------
**EXAMPLE - WIDTH x HEIGHT**
----------------------------

**useState() hook to change screen size**
* Create two state variables - width and height
* Add HTML element to display width and height
* Create a function to handle change in size of the screen using setter functions
* Add event listener

**useEffect() hook to organize codes**
* Only when the component mounts, when we append it to the DOM, ONE event listener will be added
* We will only add ONE event listener regardless the number of times we resize the screen
* Move event listener inside useEffect hook function

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/65485040-f50e-4c48-b119-196a3a0f04a7)

**Multiple useEffect() hook to add title to document**

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/412609da-4c97-4ad4-ae4a-049348d1c847)

# useContext() HOOK

**WHAT IS IT?**
* React hook that allows you to share values between multiples levels of components
* Without passing props down through each level

----------------
**Step-by-Step**
----------------

**Create 4 components, A, B, C, D**
* Create component function and import them to App.jsx
* Inside component A, import component B from its location, insert the component in return statement
* Inside component B, import component C from its location, insert the component in return statement
* Inside component C, import component D from its location, insert the component in return statement

**Create useState() hook function**
* Create user state variable and its setter function using object destructuring
* Set initial value = your username
* Import useState() hook from react using object destructuring
* Create a h2 element and embed JS. Write 'Hello, username"
  
![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/fb8a8ddc-d350-460a-8156-c8098342a026)

----------------
**Provider Component**
----------------

**What is it?**: The component that has the data we would like to access to

**Steps-by-steps**:

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/c5327737-904d-4105-bf21-9f36a83dc36c)

----------------
**Consumer Component**
----------------
* Import React, {userContext} from react
* Import {MyContext} from provider component
* Const value = useContext(MyContext)

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/86052451-6755-4c27-a6ab-b0a95859336a)

----------------
**Multiple Consumer Components**
----------------

* Import useContext hook from react
* Import userContext from provider component
* Create const variable ---> user =useContext(UserContext)

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/eb17562d-ea1e-4f4c-8456-a53bba95166a)

# useRef() HOOK

----------------
**WHAT IS IT**
----------------

**useState() hook** - useState() re-renders the component when the state value changes

**useRef()**
* Does not cause re-renders when its value changes
* When you want a component to ''remember" some information
* But you don’t want that information to trigger new renders

**When do we use it?**
* Accessing/interacting with DOM elements
* Handling Focus, Animations and Transitions
* Managing Timers and Intervals

----------------
**SET UP**
----------------

**useState() hook - increase number by 2 when button is clicked**
* Import useState, useEffect and useRef from react
* Create number state variable using array destructuring, setter function and set the initial value to 0
* Create button element inside return statement
* Create a function event handler when button is clicked, embed the JS in HTML element

**useEffect** - perform some code when the component renders

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/68f03645-4b06-4adf-8573-1dd488c72523)

----------------
**useRef() hook**
----------------

* It doesn't cause component to re-render when the value changes
* It returns an object that has one property = current
* Value of current property - string

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/b2c71d99-cf24-4286-81eb-02ff59f2e2d6)

----------------
**HTML Ref Attribute**
----------------

**Set up**
* Create an input element inside a div
* Create reference to input element - inputRef
* Inside HTML element, set ref attribute equal to that reference
* Create 2 more input

**inputRef1.current.focus()**
* It is used to give focus to the HTML element that inputRef1 is referencing.
* When we use useRef() to create a ref and attach it to an HTML element, we can access the DOM node using the current property of the ref object.
* By calling focus() on this DOM node, we're instructing the browser to bring focus to that particular input element.

**What's happening in the background?**
* Regardless which button was clicked, the component will only be rendered ONCE
* By avoiding re-rendering when it's not needed, it's going to make your component more efficient.
* useRef will return an object with one property of current
* That current property can store an object, an array or an HTML element
* When the stored value changes, it does not cause the component to re-render

![image](https://github.com/asyikin22/REACT-CONCEPTS/assets/148519441/bb6ca03d-8019-4ddf-97a7-b665b0149d5b)



