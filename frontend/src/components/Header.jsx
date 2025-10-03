import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <div className="mx-auto flex justify-between items-center">
                <Link to="/">
                    <h1 className="text-xl">IMDb Movie List</h1>
                </Link>

                <Link
                    to="/login"
                    className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
                >
                    <h1>Login</h1>
                </Link>
            </div>
        </header>
    );
};

export default Header;
