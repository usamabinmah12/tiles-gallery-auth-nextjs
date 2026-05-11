"use client";
import { useSession } from "@/lib/auth-client";
import Link from "next/link";
import React from "react";

const Profile = () => {
  const { data: session, status } = useSession();
  const user = session?.user;
  // console.log(user?.name, "user in details");
  return (
    <div>
      {user ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="bg-white shadow-2xl rounded-3xl p-10 w-[350px] text-center border border-gray-200 hover:scale-105 transition-all duration-300">
            <div className="w-24 h-24 mx-auto rounded-full bg-blue-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
              {user?.name?.charAt(0)}
            </div>

            <h1 className="text-2xl font-bold mt-5 text-gray-800">
              Your Name : {user?.name}
            </h1>

            <p className="text-gray-500 mt-2">Email : {user?.email}</p>
            <Link href={"/myProfile/update"}>
              <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center text-center justify-center m-12 bg-slate-300 text-amber-600">
          <div className="p-14">
            <h2 className="">You have to login first to see profile</h2>
            <Link href={"/login"}>
              <button className="btn btn-primary m-5">Login</button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
