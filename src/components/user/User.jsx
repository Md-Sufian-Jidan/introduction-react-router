import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    // console.log(user);
    const {id ,name , phone, email} = user;
    const userStyle ={
        border : '2px dotted #09d765',
        padding : '5px',
        borderRadius : '20px'
    }

    return (
        <div style={userStyle}>
            <p>{name}</p>
            <p>Phone : {phone}</p>
            <p>Email : {email}</p>
            <Link to={`/user/${id}`}>Show Details</Link>
            <Link to={`/user/${id}`}><button>Click me</button></Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired
}
export default User;