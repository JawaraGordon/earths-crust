import React from 'react';

function IntheGarden() {
  return (
    <div>
      <p>In The Garden</p>
    </div>
  );
}

function FreshPicks() {
  return (
    <div>
      <p>Fresh Picks</p>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      <div className="center">
        <h1>The Best Pizza On The Planet!</h1>
        <p>Open 24/7 364 - (closed on Earth Day)</p>
        <div>
          <IntheGarden></IntheGarden>
          <FreshPicks></FreshPicks>
        </div>
      </div>
    </>
  );
}
