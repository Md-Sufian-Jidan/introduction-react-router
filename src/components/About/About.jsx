import { Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <h2>About Us </h2>
            <p>Everything you want to know</p>
            <Outlet></Outlet>
        </div>
    );
};

export default About;