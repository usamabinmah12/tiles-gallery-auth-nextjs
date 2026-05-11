"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { authClient, useSession } from "@/lib/auth-client";
import Image from "next/image";

const Navbar = () => {
  // const session = useSession();
  const { data: session, status } = useSession();
  // console.log(isPending, "ispending");
  console.log(session , "session");
  const User = session?.user;
  console.log(User , "user");
  // const {name , email, password} = User;
  const [isLogin, setIsLogin] = useState(false);
  // console.log(User?.name, "user");
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
          </div>
          <Link href={"/"} className="btn btn-ghost text-xl">
            TilesGL
          </Link>
        </div>

        <div className="flex  items-center gap-4 w-80">
          <NavLink href={"/"}>
            {" "}
            <button className="p-2 ">Home</button>{" "}
          </NavLink>

          <NavLink href={"/all-tiles"}>
            {" "}
            <button className="p-2">All Tiles</button>{" "}
          </NavLink>

          <NavLink className="p-2" href={"/myProfile"}>
            {" "}
            <button className="p-1"> My profile</button>{" "}
          </NavLink>
        </div>

        <div className="navbar-end">
  {User ? (
    <div className="flex gap-4 items-center">
      
      <h2 className="font-bold">Hello, {User?.name}</h2>

      <button
        className="btn btn-primary"
        onClick={ () => {
          try {
             authClient.signOut();
            // window.location.href = "/"; 
          } catch (error) {
            console.log(error);
          }
        }}
      >
        Logout
      </button>
    </div>
  ) : (
    <Link href="/login" className="btn btn-primary">
      Login
    </Link>
  )}
</div>
      </div>
    </div>
  );
};

export default Navbar;
