import { Hit as AlgoliaHit } from 'instantsearch.js';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Highlight } from 'react-instantsearch';

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    code: string;
    image: string;
    manufacturer: string;
  }>;
};
const fallbackImage = '/no-image.png';
export default function SearchHit({ hit }: HitProps) {
  const [error, setError] = useState<React.SyntheticEvent<
    HTMLImageElement,
    Event
  > | null>(null);

  const imageUrl = error ? fallbackImage : hit.image;
  console.log({
    error,
    imageUrl,
    hit,
  });

  useEffect(() => {
    setError(null);
  }, [hit]);

  return (
    <div className="flex items-center p-2.5 mb-2.5 rounded">
      <Image
        src={imageUrl || fallbackImage}
        width={100}
        height={100}
        alt={hit.name}
        className="w-25 h-25 object-cover mr-2.5 rounded"
        onError={setError}
      />

      <div className="flex-grow">
        <Highlight attribute="manufacturer" hit={hit} />
        <Highlight
          hit={hit}
          attribute="name"
          className="font-bold text-gray-800 block"
        />
        <span className="text-gray-600">Part Number: {hit.code}</span>{' '}
        <br />
      </div>
    </div>
  );
}
