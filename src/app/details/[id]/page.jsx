import { allTiles } from '@/lib/data';
import Image from 'next/image';

const DetailsPage = async ({ params }) => {

    const { id } = await params;

    console.log(id, "id");

    const tiles = await allTiles(); 

    const tile = tiles.find(item => item.id === id);

    if (!tile) {
        return <div>Tile not found</div>;
    }

    return (
        <div className='container mx-auto bg-amber-100 flex items-center justify-center'>
                <div className=' p-10 '>
            <Image
                src={tile.image}
                width={800}
                height={800}
                alt={tile.description}
                className='object-cover rounded-xl'
            />

            <h1 className='text-2xl font-bold mt-4'>{tile.title}</h1>

            <p className='text-gray-600 mt-2'>{tile.description}</p>

            <p className='mt-2'><strong>Price</strong>: ${tile.price}</p>

            <p><strong>Material</strong>: {tile.material}</p>
            <p><strong>Description</strong> : {tile.description} </p>
        </div>
        </div>
        
    );
};

export default DetailsPage;