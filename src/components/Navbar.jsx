"use client";
import Link from "next/link";
import React from "react";
import NavLink from "./NavLink";
import { authClient, useSession } from "@/lib/auth-client";

const Navbar = () => {
  const { data: session, isPending } = useSession();

  const User = session?.user;

  return (
    <div className="shadow-sm bg-base-100">
      <div className="navbar container mx-auto px-4">
        <div className="navbar-start">
   
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink href={"/"}>Homepage</NavLink>
              </li>

              <li>
                <NavLink href={"/all-tiles"}>All Tiles</NavLink>
              </li>

              <li>
                <NavLink href={"/myProfile"}>My Profile</NavLink>
              </li>
            </ul>
          </div>

          <Link href={"/"} className="btn btn-ghost text-xl">
            TilesGL
          </Link>
        </div>

       
        <div className="navbar-center hidden lg:flex">
          <div className="flex items-center gap-4">
            <NavLink href={"/"}>
              <button className="p-2">Home</button>
            </NavLink>

            <NavLink href={"/all-tiles"}>
              <button className="p-2">All Tiles</button>
            </NavLink>

            <NavLink href={"/myProfile"}>
              <button className="p-2">My Profile</button>
            </NavLink>
          </div>
        </div>

        {/* Navbar End */}
        <div className="navbar-end">
          {isPending ? (
            <div className="text-sm md:text-lg font-bold text-red-800">
              Loading...
            </div>
          ) : User ? (
            <div className="flex items-center gap-3">
              <h2 className="font-bold hidden sm:block">
                Hello, {User?.name}
              </h2>

              <button
                className="btn btn-primary btn-sm md:btn-md"
                onClick={async () => {
                  try {
                    await authClient.signOut();
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Logout
              </button>
            </div>
          ) : (
            <Link href="/login" className="btn btn-primary btn-sm md:btn-md">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;