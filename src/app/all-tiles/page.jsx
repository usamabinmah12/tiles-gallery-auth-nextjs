import { allTiles } from '@/lib/data';
import Image from 'next/image';
import React from 'react';

const AllTilesPage = async () => {
    const data = await allTiles()
    return (
        <div className='container mx-auto'>
           <div className="grid grid-cols-2 gap-2.5 justify-evenly m-4">
                   {data.map((tiles) => (
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
                     <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                     <div className="card-actions justify-end">
                       <button className="btn btn-primary">View Details</button>
                     </div>
                   </div>
                 </div>
                 ))}
                 </div>
        </div>
    );
};

export default AllTilesPage;