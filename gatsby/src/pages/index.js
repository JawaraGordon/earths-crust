import React from 'react';
import { HomePageGrid } from '../styles/Grids';
import LoadingGrid from '../styles/LoadingGrid';
import useLatestData from '../utils/useLatestData';

function InTheGarden({ greenthumbs }) {
  return (
    <div>
      {!greenthumbs && <LoadingGrid count={4} />}
      {greenthumbs && !greenthumbs?.length && (
        <p>All Green Thumbs are in the garden</p>
      )}
    </div>
  );
}

function FreshPicks(freshPicks) {
  return (
    <div>
      {!freshPicks && <LoadingGrid count={4} />}
      {freshPicks && !freshPicks?.length && (
        <p>Waiting for more items to grow...</p>
      )}
    </div>
  );
}

export default function HomePage() {
  const { freshPicks, greenthumbs } = useLatestData();

  return (
    <>
      <div className="center">
        <h1>The Best Pizza On The Planet!</h1>
        <p>Open 24/7 364 - (closed on Earth Day)</p>
        <HomePageGrid>
          <InTheGarden greenthumbs={greenthumbs} />
          <FreshPicks freshPicks={freshPicks} />
        </HomePageGrid>
      </div>
    </>
  );
}
