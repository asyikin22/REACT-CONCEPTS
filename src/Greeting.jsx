import PropTypes from 'prop-types'

function Greeting(props) {  

    const greetingMessage = <h2 className="greeting-message">
                            Welcome {props.username}
                            </h2> 

    const logInPrompt = <h2 className="login-message">
                        Please register or log in to continue
                        </h2>

    return(props.isLoggedIn) ? greetingMessage : logInPrompt
                                
}

Greeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
Greeting.defaultProps = {
    isLoggedIn: false,
    username: "Stranger Danger"
}

export default Greeting




// if(props.isLoggedIn) {
    //     return <h2>Welcome {props.username}</h2>
    // }
    // else {
    //     return<h2>Please register or log in to continue</h2>
    // }


