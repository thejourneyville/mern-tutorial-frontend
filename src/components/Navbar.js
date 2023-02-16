import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <header>
            <div className="container">
                {/* setting up a Link to the home page 
                using react-router-dom's library */}
                <Link to="/">
                    <h1>Hey... Workout, buddy!</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;