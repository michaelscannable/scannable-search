'use client';
import { Panel } from '@/components/Panel';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearchNext } from 'react-instantsearch-nextjs';
import SearchHit from '@/components/SearchHit';
import {
  DynamicWidgets,
  Hits,
  RefinementList,
  SearchBox,
} from 'react-instantsearch';

const client = algoliasearch(
  'SRC1ISDAM7',
  '965b940b45f3174953c4549e2b45f02d'
);

export default function Search() {
  return (
    <InstantSearchNext
      searchClient={client}
      indexName="prod_SCANNABLE"
    >
      <div className="Container">
        <div>
          <DynamicWidgets fallbackComponent={FallbackComponent} />
        </div>
        <div>
          <SearchBox />
          <Hits hitComponent={SearchHit} />
        </div>
      </div>
    </InstantSearchNext>
  );
}

function FallbackComponent({ attribute }: { attribute: string }) {
  return (
    <Panel header={attribute}>
      <RefinementList attribute={attribute} />
    </Panel>
  );
}
