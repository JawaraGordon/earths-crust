import React from 'react';
import { HomePageGrid } from '../styles/Grids';
import ItemGrid from '../styles/ItemGrid';
import LoadingGrid from '../styles/LoadingGrid';
import useLatestData from '../utils/useLatestData';

function InTheGarden({ greenthumbs }) {
  return (
    <div>
      <h2>Today's Green Thumbs</h2>
      <br></br>
      <br></br>
      {!greenthumbs && <LoadingGrid count={4} />}
      {greenthumbs && !greenthumbs?.length && (
        <p>All Green Thumbs are in the garden</p>
      )}
      {greenthumbs?.length && <ItemGrid items={greenthumbs} />}
    </div>
  );
}

function FreshPicks({ freshPicks }) {
  return (
    <div>
      <h2>Today's Fresh Picks</h2>
      <br></br>
      <br></br>
      {!freshPicks && <LoadingGrid count={4} />}
      {freshPicks && !freshPicks?.length && (
        <p>Waiting for more items to grow...</p>
      )}
      {freshPicks?.length && <ItemGrid items={freshPicks} />}
    </div>
  );
}

export default function HomePage() {
  const { freshPicks, greenthumbs } = useLatestData();

  return (
    <>
      <div className="center">
        <h1 className="mark">The Best Pizza On The Planet!</h1>
        <br></br>
        <br></br>
        <br></br>
        <HomePageGrid>
          <FreshPicks freshPicks={freshPicks} />
          <InTheGarden greenthumbs={greenthumbs} />
        </HomePageGrid>
        <br></br>
        <h2 className="mark">Open 24/7 364 - (closed on Earth Day)</h2>
      </div>
    </>
  );
}
