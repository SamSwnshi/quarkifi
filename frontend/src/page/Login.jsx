import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate('/')
    };
    return (
        <div className="max-w-md mx-auto mt-10 border-2 p-7 rounded-2xl ">
            <h2 className="text-2xl font-bold mb-4">Login </h2>
            <form className="space-y-4" onClick={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 border rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-pink-500 text-white p-2 rounded hover:bg-pink-700"
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
