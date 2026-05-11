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
                     <div className="card-title">{tiles.title}</div>
                     <div>{tiles.description}</div>
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