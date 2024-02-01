"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function LoginPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const onLogin = async () => {};

  return (
    <main className="bg-gray-950">
      <div className="flex flex-col items-center justify-center mx-auto min-h-screen py-2">
        <h1 className="text-white text-4xl mb-4 font-extrabold">Login</h1>

        <label className="text-white" htmlFor="email">
          Email
        </label>
        <input
          className="p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-gray-600"
          id="email"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
        />

        <label className="text-white" htmlFor="password">
          Password
        </label>
        <input
          className="p-2 rounded-lg border border-gray-300 mb-4 focus:outline-none focus:border-gray-600"
          id="password"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
        />

        <button
          onClick={onLogin}
          className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600 text-white"
        >
          Login
        </button>
        <div className="flex space-x-1">
          <p className="text-white">Don't have an account?</p>
          <Link className="text-white font-extrabold" href="/signup">
            Sign Up
          </Link>
        </div>
      </div>
    </main>
  );
}
