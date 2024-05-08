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





