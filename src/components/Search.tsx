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
import { Toaster } from 'sonner';

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
      <Toaster position="top-right" />
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr] min-h-screen gap-4 p-4">
        <div className="sticky top-0 h-screen overflow-auto z-20 p-2">
          <DynamicWidgets fallbackComponent={FallbackComponent} />
        </div>

        <div className="space-y-4">
          <div className="sticky top-0 z-30 bg-white shadow">
            <SearchBox />
          </div>

          {/* Hits list: Add some padding for visual comfort */}
          <div>
            <Hits hitComponent={SearchHit} />
          </div>
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
