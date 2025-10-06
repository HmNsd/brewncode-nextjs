"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    password: "",
    email: "",
  });

  const [error, setError] = React.useState("");
  const [success, setSuccess] = React.useState(false);
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  const onLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    try {
      if (!user.email.trim || !user.password.trim()) {
        setError("All fields are required.");
        setButtonDisabled(true);
        return;
      }
      const response = await axios.post("/api/users/login", user);
      console.log("Login Success", response.data);
      router.push("/profile");

      // // Simulate Login logic (you can connect to your API here)
      // setTimeout(() => {
      //   setSuccess(true);
      // }, 1000);
    } catch (error: any) {
      setError("An error occurred during login. Please try again.");
      setSuccess(false);
      console.log(error);
    }
  };

  // Add this useEffect to handle button disabled state
  useEffect(() => {
    if (!user.email.trim() || !user.password.trim()) {
      setButtonDisabled(true);
    } else {
      setButtonDisabled(false);
    }
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Log In
        </h1>

        <form onSubmit={onLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="mt-1 w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Error or Success Message */}
          {error && <p className="text-sm text-red-500">{error}</p>}
          {success && (
            <p className="text-sm text-green-500">Signup successful!</p>
          )}

          {/* Submit Button */}
          <button
  type="submit"
  className={`w-full font-semibold py-2 px-4 rounded-md transition-colors duration-200
    ${buttonDisabled
      ? "bg-gray-500 cursor-not-allowed"
      : "bg-blue-400 hover:bg-blue-500 text-white"}
  `}
  disabled={buttonDisabled}
>
  Login
</button>
        </form>

        {/* Redirect Link */}
        <p className="mt-6 text-sm text-center text-gray-400">
          Doesn't have an account?{" "}
          <Link href="/signup" className="text-indigo-400 hover:underline">
            Sign up
          </Link>
        </p>

        {/* Forget Password */}
        <p className="mt-6 text-sm text-center text-gray-400">
          Forgot password?{" "}
          <Link href="/forgotpassword" className="text-indigo-400 hover:underline">
            Forgotten Password
          </Link>
        </p>
      </div>
    </div>
  );
}
