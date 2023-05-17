import React, { useState } from "react";
import axios from "axios";
import { useUser } from "./UserProvider";
// import jwtDecode from "jwt-decode";

function Login() {
    const { setUser } = useUser();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const login = async (e) => {
        e.preventDefault();

        try {
            const res = await axios.post("/api/login", { email, password });
            // Insert JWT (res.data.token)
            localStorage.setItem('token', res.data.token);
            // const decodedToken = jwtDecode(res.data.token);
            setUser(res.data.user);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={login}>
            <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
            <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;