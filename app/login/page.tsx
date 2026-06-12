"use client";
import {useState} from "react";
export default function LoginPage() {
    const [email, setEmail]=
    useState("");
    const [password, setPassword]=
    useState("");
    
    const handleLogin = async () => {
        const response = await fetch("/api/login",{
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
        });
        if(response.ok){
            window.location.href = "/dashboard";

        }
};
return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
            <h1 className="text-2xl font-bold mb-4">Login</h1>
            <input
                className="border p-2 w-full mb-3"
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                className="border p-2 w-full mb-3"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
            />
            <button
                onClick={handleLogin}
                className="px-4 py-2 bg-blue-500 text-white rounded"
            >
                Login
            </button>
        </div>
    </div>
);
}