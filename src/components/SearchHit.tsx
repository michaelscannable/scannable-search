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
    <div className="hit">
      <Image
        src={imageUrl || fallbackImage}
        width={100}
        height="100"
        alt={hit.name}
        className="hit-image"
        onError={setError}
      />

      <div className="hit-details">
        <Highlight attribute="manufacturer" hit={hit} />
        <Highlight hit={hit} attribute="name" className="hit-label" />
        <span className="hit-code">{hit.code}</span> <br />
      </div>
    </div>
  );
}
