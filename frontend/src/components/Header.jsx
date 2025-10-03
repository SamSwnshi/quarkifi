import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/userSlice';
import { useNavigate, Link } from 'react-router-dom';

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuth);
    const user = useSelector((state) => state.auth.user);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-xl">IMDb Movie List</h1>
                </Link>
                {isAuthenticated ? (<div className="flex items-center space-x-4">
                    <span className="text-lg">Welcome, <strong>{user?.username || 'User'}</strong>!</span>
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition duration-200"
                    >
                        Logout
                    </button>
                </div>) : (<Link
                    to="/login"
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                >
                    <h1>Login</h1>
                </Link>)}

            </div>
        </header>
    );
};

export default Header;
