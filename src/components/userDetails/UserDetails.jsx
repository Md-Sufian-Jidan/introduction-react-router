import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData();
    // console.log(user);
    const {name, website} = user;
    return (
        <div>
            <h2>Details About User : {name}</h2>
            <h2>Visit Our Website : {website}</h2>
        </div>
    );
};

export default UserDetails;