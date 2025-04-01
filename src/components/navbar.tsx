import { Link } from "react-router-dom";
// En navigeringsmeny med alla sidor. Alla ska vara inbäddade i listelement eller liknande
const Navbar = () => {
    return (
        <nav>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/fruits">Our fruits</Link></li>
            <li><Link to="/contact">Contact us</Link></li>
        </nav>
    );
};
// exporteras till App.tsx
export default Navbar;