import { Outlet } from "react-router-dom";

const ContactUs = () => {
    return (
        <div>
            <h3>Contact Us</h3>
            <h3>We are one call away.You are one step far from contact us</h3>
            <Outlet></Outlet>
        </div>
    );
};

export default ContactUs;