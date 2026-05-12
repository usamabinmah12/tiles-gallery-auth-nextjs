"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Page = () => {
    const [name, setName] = useState("");

    const upd = async () => {
        const data = await authClient.updateUser({
            name: name,
            // image: "https://example.com/image.jpg",
        });
        toast("Name Updated Succesfully");
        window.location.href = "/"
       // console.log(data);
    };

    return (
       <div className="flex flex-col items-center justify-center m-5 bg-sky-700 rounded-3xl">
        <div className="space-x-5 mx-3 p-6 text-amber-100">
          
          <label className="text-2xl font-semibold">
            Add Your New Name Here
          </label>
                <input
                    type="text"
                    placeholder="Enter name for update"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered text-black"
                />
                <Link href={"/"}><button
                    onClick={upd}
                    className="btn btn-primary m-3"
                >
                    Confirm
                </button></Link>
                
            </div>
        </div>
    );
};

export default Page;