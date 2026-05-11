import Link from "next/link";
import React from "react";

const Navbar = () => {
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
          <Link href={"/"} className="btn btn-ghost text-xl">TailesGL</Link>
        </div>
        
          <div className="flex  items-center gap-4 w-80">
           
              <Link href={"/"}> <button>Home</button> </Link>
            
           
             
                <Link href={"/all-tiles"}  className=" bg-amber-400 "> <button className="">All Tiles</button> </Link>
               
              
            
            
              <Link href={"/myProfile"}>My profile</Link>
            
          </div>
       
        <div className="navbar-end">
          <Link href={'/login'} className="btn">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
