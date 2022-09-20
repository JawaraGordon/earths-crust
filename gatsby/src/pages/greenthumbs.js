import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';
import styled from 'styled-components';
import Pagination from '../components/Pagination';
import SEO from '../components/SEO';

const GreenThumbsGrid = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const GreenThumbsStyles = styled.div`
  a {
    text-decoration: none;
  }

  .gastby-image-wrapper {
    height: 400px;
  }

  h2 {
    transform: rotate(-2deg);
    text-align: center;
    font-size: 4rem;
    margin-bottom: -1rem;
    position: relative;
    z-index: 2;
  }

  .description {
    background: #8dc34b;
    padding: 1rem;
    margin: 2rem;
    margin-top: -2rem;
    position: relative;
    z-index: 2;
    transform: rotate(-1deg);
    text-align: center;
  }
`;

export default function GreenThumbsPage({ data, pageContext }) {
  const greenthumbs = data.greenthumbs.nodes;

  return (
    <>
      <SEO
        title={`Green Thumbs - Page ${pageContext.currentPage || 1}`}
        
      />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.greenthumbs.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/greenthumbs"
      />
      <GreenThumbsGrid>
        {greenthumbs.map((person) => (
          <GreenThumbsStyles key={person.id}>
            <Link to={`/greenthumbs/${person.slug.current}`}>
              <h2>
                <span className="mark">{person.name}</span>
              </h2>
            </Link>
            <Img fluid={person.image.asset.fluid} />
            <p className="description">{person.description}</p>
          </GreenThumbsStyles>
        ))}
      </GreenThumbsGrid>
    </>
  );
}

export const query = graphql`
  query($skip: Int = 0, $pageSize: Int = 3) {
    greenthumbs: allSanityPerson(limit: $pageSize, skip: $skip) {
      totalCount
      nodes {
        name
        id
        slug {
          current
        }
        description
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
