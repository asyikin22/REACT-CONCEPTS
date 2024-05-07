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








