import Banner from "@/components/Banner";
import Navbar from "@/components/Navbar";
import { allTiles } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const data = await allTiles();
  console.log(data);
  return (
    
    <div className="container mx-auto bg-slate-100">
      <Banner></Banner>
      <div>
        <h3 className="text-3xl font-bold space-x-3.5 gap-x-3.5">Featured Tiles</h3>
      </div>
      <div className="grid  sm:grid-cols-1 md:grid-cols-1  lg:grid-cols-2 gap-2.5 justify-evenly m-4">
        {data.slice(0,4).map((tiles) => (
        <div key={tiles.id} className="card bg-base-100 shadow-sm m-3">
        <figure>
          <Image
            src={tiles.image}
            width={500}
            height={300}
            alt={tiles.material} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{tiles.title}</h2>
          <p>{tiles.description}</p>
          <div className="card-actions justify-end">
            <Link href={`/details/${tiles.id}`}> <button  className="btn btn-primary">View Details</button></Link>
            
          </div>
        </div>
      </div>
      ))}
      </div>
      
    </div>
  );
}
