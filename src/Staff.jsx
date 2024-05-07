import PropTypes from 'prop-types'

function Staff(props) {

    return (
        <div className="Employee">
            <p>Employee name: {props.name}</p>
            <p>Role: {props.role}</p>
            <p>Age: {props.age} </p>
            <p>Employee: {props.isEmployee ? "Yes" : "No"}</p>
        </div>
    );

}

Staff.propTypes = {
    name: PropTypes.string,
    role: PropTypes.string,
    age: PropTypes.number,
    isEmployee: PropTypes.bool,
}

Staff.defaultProps = {
    name: "Freelancer",
    role: "n/a",
    age: 0,
    isEmployee: false,
}

export default Staff



