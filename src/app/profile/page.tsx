"use client";

import { useRouter } from "next/navigation";
import React from "react";
import axios from "axios";
import Link from "next/link";
import toast from "react-hot-toast";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("Nothing");

  const handleLogout = async () => {
    // Clear user session or token here if needed
    // For example: localStorage.removeItem("token");

    try {
      await axios.get("/api/users/logout");

      toast.success("Logged out successfully");
      router.push("/login");
    } catch (error: any) {
      console.log(error.response?.data?.message || error.message);

      toast.error(error?.response?.data?.message || "Something went wrong!");
    }
  };


  const getUser = async () => {
    console.log("Getting user info...");
    
    const res = await axios.get("/api/users/useractive");
    console.log(res.data);

    setData(res.data.data._id);

  }

  return (
    <div>
      <h1>Profile</h1>
      <br />
      <h1>Profile Page</h1>
      <br />
      <h2 className="p-3 rounded bg-amber-400">{data==='nothing' ? "Nothing" : <Link href={`/profile/${data}`}>{data}</Link>}</h2>
      <button
        onClick={handleLogout}
        className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
      >
        Logout
      </button>
      <button
        onClick={getUser}
        className="mt-4 px-4 py-2 bg-purple-400 text-white rounded hover:bg-purple-500 transition-colors"
      >
        Get User Info
      </button>
    </div>
  );
}
