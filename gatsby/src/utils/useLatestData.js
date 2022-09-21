import { useState, useEffect } from 'react';

export default function useLatestData() {
  const [freshPicks, setFreshPicks] = useState();
  const [greenThumbs, setGreenThumbs] = useState();

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: `
            {
                StoreSettings 
                  (id: "hillside"){
                  name
                  greenthumbs{
                    name
                  }
                  freshPicks{
                    name
                  }
                }
              }
            `,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        setFreshPicks(res.data.StoreSettings.freshPicks);
        setGreenThumbs(res.data.StoreSettings.greenthumbs);
      });
  }, []);
  return {
    freshPicks,
    greenThumbs,
  };
}
