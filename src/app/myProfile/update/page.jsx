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
        <div className="container mx-auto bg-slate-200">
            <div className="flex flex-col items-center justify-center m-10 p-3.5">
                <input
                    type="text"
                    placeholder="Enter name for update"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="input input-bordered"
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