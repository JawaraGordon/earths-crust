import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';
import SEO from '../components/SEO';

const DrinkGridStyles = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
`;

const SingleDrinkStyles = styled.div`
  border: 1px solid var(--grey);
  padding: 2rem;
  text-align: center;
  img {
    width: 100%;
    height: 200px;
    object-fit: contain;
    align-items: center;
    font-size: 10px;
    color: black;
  }
`;

export default function DrinksPage({ data }) {
  console.log(data.allDrink.nodes[0]._1);
  return (
    <>
      <SEO
        title={`Kombucha - We have ${data.allDrink.nodes[0]._1.length} in stick`}
        image={pizza.image?.asset?.fluid?.src}
      />
      <h2 className="center">
        We have {data.allDrink.nodes[0]._1.length} types of Kombucha available.
      </h2>
      <DrinkGridStyles>
        {data.allDrink.nodes[0]._1.map((drink) => {
          const rating = Math.round(drink.rating.average);
          return (
            <SingleDrinkStyles key={drink.id}>
              <img src={drink.img} alt={drink.name} />
              <h3>{drink.name}</h3>
              <h3>Price: {drink.price}</h3>
              <p title={`${rating} out of 5 stars`}>
                {`⭐️`.repeat(rating)}
                <span style={{ filter: `grayscale(100%)` }}>
                  {`⭐️`.repeat(5 - rating)}
                </span>
                <span>({drink.rating.reviews} - reviews)</span>
              </p>
            </SingleDrinkStyles>
          );
        })}
      </DrinkGridStyles>
    </>
  );
}

export const query = graphql`
  query {
    allDrink {
      nodes {
        _1 {
          id
          img
          name
          price
          rating {
            average
            reviews
          }
        }
      }
    }
  }
`;
