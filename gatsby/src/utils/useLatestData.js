import { useState, useEffect } from 'react';

const gql = String.raw;

const info = `
    name
    _id
    image {
      asset {
        url
        metadata {
          lqip
        }
      }
    }
`;

export default function useLatestData() {
  const [freshPicks, setFreshPicks] = useState();
  const [greenthumbs, setGreenThumbs] = useState();

  useEffect(() => {
    fetch(process.env.GATSBY_GRAPHQL_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: gql`
          query {
            StoreSettings(id: "hillside") {
              name
              greenthumbs {
                ${info}
              }
              freshPicks {
                ${info}
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
    greenthumbs,
  };
}
