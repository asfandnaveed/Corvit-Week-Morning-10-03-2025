import React, { useState } from "react";
import { auth } from '../Firebase'
import { createUserWithEmailAndPassword } from "firebase/auth";


function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const registerUser = async (e) => {

        e.preventDefault();

        try {
            const result = await createUserWithEmailAndPassword(auth, email, password);


            setMessage("User Registered !! " + result.user.email);
        } catch (error) {
            setMessage(error);
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="card shadow-lg">
                    <div className="card-body p-4">
                        {message && (<div className="alert alert-warning">{message}</div>)}
                        <h4 className="card-title mb-4 text-center">Register</h4>
                        <form onSubmit={registerUser}>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(data) => setEmail(data.target.value)}
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="password"
                                    name="password"
                                    placeholder="Enter your password"
                                    value={password}
                                    onChange={(data) => setPassword(data.target.value)}
                                />
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </>
    );
}

export default Register;