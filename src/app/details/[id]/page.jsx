import { allTiles } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';
import { useSession } from '@/lib/auth-client';
import TileUI from '@/components/TileUI';

const DetailsPage = async ({ params }) => {

    const {id} =await params;

    const tiles = await allTiles();

    const tile = tiles.find(item => item.id === id);

    if (!tile) {
        return <div>Tile not found</div>;
    }

    return (
        <TileUI tile={tile} />
    );
};

export default DetailsPage;