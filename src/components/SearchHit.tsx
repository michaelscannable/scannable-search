import { Hit as AlgoliaHit } from 'instantsearch.js';
import Image from 'next/image';
import { Highlight } from 'react-instantsearch';

type HitProps = {
  hit: AlgoliaHit<{
    name: string;
    code: string;
    image: string;
    manufacturer: string;
  }>;
};

export default function SearchHit({ hit }: HitProps) {
  return (
    <div className="hit">
      {hit.image && (
        <Image
          src={hit.image}
          width={100}
          height="100"
          alt={hit.name}
          className="hit-image"
        />
      )}
      <div className="hit-details">
        <Highlight attribute="manufacturer" hit={hit} />
        <Highlight hit={hit} attribute="name" className="hit-label" />
        <span className="hit-code">{hit.code}</span> <br />
      </div>
    </div>
  );
}
