import { Link, useLocation, useNavigate } from "react-router-dom"; 
import { useLogout } from "../hooks/useLogout";
import { useAuthContext } from "../hooks/useAuthContext";

const Navbar = () => {
    const { logout } = useLogout();
    const { user } = useAuthContext();
    const location = useLocation(); 
    const navigate = useNavigate(); 

    const handleLogout = () => {
        logout();
        navigate("/"); 
    };

    return (
        <header>
            {user && ( 
                <div className="container">
                    <Link to="/home"> 
                        <h1>Transactions</h1>
                    </Link>
                    <a onClick={handleLogout}>
                        <h1>Logout</h1>
                    </a>
                </div>
            )}

            {!user && location.pathname === '/signup' && (
                <div className="container">
                    <Link to="/login">
                        <h1>Login</h1>
                    </Link>
                </div>
            )}
        </header>
    );
};

export default Navbar;
