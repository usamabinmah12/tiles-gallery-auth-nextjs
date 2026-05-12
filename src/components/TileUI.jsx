"use client";

import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";

export default function TileUI({ tile }) {

    const { data: session } = useSession();

    const user = session?.user;

    if (!user) {
        return (
            <div className='flex flex-col items-center text-center justify-center m-12 bg-slate-300 text-amber-600'>
                <div className="p-14">
                    <h2>You have to login first to see details of Tiles</h2>
                    <Link href="/login">
                        <button className='btn btn-primary m-5'>Login</button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className='container mx-auto bg-amber-100 '>
            <div className=" flex items-center justify-center ">
                    <div className='p-10 flex flex-col justify-center '>
                        <div className="">
                                 <Image
                            src={tile.image}
                            width={800}
                            height={800}
                            alt={tile.description}
                            className='object-cover rounded-xl'
                />
                        </div>
               

                <h1 className='text-2xl font-bold mt-4'>{tile.title}</h1>
                    <div className="flex justify-center">
                        <p className='text-gray-600 mt-2 text-2xl '>{tile.description}</p> 
                    </div>
                 
                <p className=""> <strong >Dimensions : </strong> {tile.dimensions}</p>
                <p className='mt-2'><strong>Price</strong>: ${tile.price}</p>

                <p><strong>Material</strong>: {tile.material}</p>
                <p>
  <strong>In stock :</strong> {`${tile.inStock ? "Available" : "Not Available"}`}
</p>
            </div>
            </div>
            
        </div>
    );
}