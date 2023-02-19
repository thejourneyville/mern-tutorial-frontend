import { Link } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";

const Navbar = () => {
    // logout function destructured from useLogout hook
    const { logout } = useLogout();

    // handleLogout function invokes the logout function from useLogout
    const handleLogout = () => {
        logout();
    };

    return (
        <header>
            <div className="container">
                {/* setting up a Link to the home page 
                using react-router-dom's library */}
                <Link to="/">
                    <h1>Hey... Workout, buddy!</h1>
                </Link>
                <nav>
                    {/* button created to logout */}
                    <div>
                        <button onClick={handleLogout}>Log out</button>
                    </div>
                    <div>
                        <Link to="/login">Login</Link>
                        <Link to="/signup">Signup</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
