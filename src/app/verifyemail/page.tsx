"use client";

import axios from "axios";
import Link from "next/link";
import React, { useState, useEffect, use } from "react";

export default function VerifyEmailPage() {
  const [token, setToken] = useState("");
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState(false);

  const verifyUserEmail = async () => {
    try {
      await axios.post("/api/users/verifyemail", { token });

      setVerified(true);
    } catch (error: any) {
      setError(true);
      console.log(error.response.data);
    }
  };

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const urlToken = params.get("token") || "";

    setToken(urlToken);
  }, []);

  useEffect(() => {
    if (token.length > 0) {
      verifyUserEmail();
    }
  }, [token]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Verify Email</h1>
      <h2 className="text-2xl bg-orange-400 rounded text-black p-2 font-bold mb-4">
        {token ? `${token}` : "No Token"}
      </h2>
      {verified ? (
        <div>
          <p className="text-green-600 mb-2">Your email has been verified!</p>
          <Link href="/login">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              Go to Login
            </button>
          </Link>
        </div>
      ) : (
        <p>Verifying...</p>
      )}
      {error && (
        <div>
          <p className="text-orange-600 mb-2">
            Verification failed. The link may be invalid or expired.
          </p>
          <Link href="/signup">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded transition-colors">
              Go to Signup
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
