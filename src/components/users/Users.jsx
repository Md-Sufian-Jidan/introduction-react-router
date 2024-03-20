import { useLoaderData } from "react-router-dom";
import User from "../user/User";
import './Users.css'
const Users = () => {

    const users = useLoaderData();

    // state --> data
    //state --> loader
    // use Effect 
    // fetch --> state set --> set state
    return (
        <div>
            <h2>our total users : {users?.length}</h2>
            <h2>Fantastic and Vodro users</h2>
            <div className="users margin">
                {
                    users.map((user) => <User key={user.id} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;