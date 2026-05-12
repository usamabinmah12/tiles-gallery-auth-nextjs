"use client";

import { useSession } from "@/lib/auth-client";
import { allTiles } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const AllTilesPage = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const { data: session, isPending, status } = useSession();

  useEffect(() => {
    const fetchData = async () => {
      const result = await allTiles();
      setData(result);
    };

    fetchData();
  }, []);

  const filteredTiles = data.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container mx-auto">
      
      <div className="flex flex-col items-center justify-center m-5 bg-sky-700 rounded-3xl">
        <div className="space-x-5 mx-3 p-6 text-amber-100">
          
          <label className="text-2xl font-semibold">
            Search Your Tiles Here
          </label>

          <input
            className="p-2.5 rounded-2xl text-black"
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="grid sm:grid:cols-1 md:grid-cols-1 lg:grid-cols-2 gap-2.5 justify-evenly m-4">
        
        {filteredTiles.length > 0 ? (
          filteredTiles.map((tiles) => (
            <div
              key={tiles.id}
              className="card bg-base-100 shadow-sm m-3"
            >
              <figure>
                {isPending ? (
                  <div className="text-3xl">Loading image ....</div>
                ) : (
                  <Image
                    src={tiles.image}
                    width={500}
                    height={300}
                    alt={tiles.material}
                  />
                )}
              </figure>

              <div className="card-body">
                <div className="card-title">{tiles.title}</div>

                <div>{tiles.description}</div>
                <div className=""><strong>Price</strong>  : {tiles.price} USD</div>
                <div className="card-actions justify-end">
                  <Link href={`/details/${tiles.id}`}>
                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-2xl font-bold flex items-center justify-center bg-slate-500 w-full">
            <div className=" p-6 text-red-800">
                No tiles found .... XXX
            </div>
            
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTilesPage;