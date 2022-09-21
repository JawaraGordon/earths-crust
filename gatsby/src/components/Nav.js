import React from 'react';
import { Link, navigate } from 'gatsby';
import styled from 'styled-components';
import Logo from './Logo';

const NavStyles = styled.nav`
  margin-top: 1rem;

  .logo {
    transform: translateY(-25%);
  }
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr auto 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
    margin-top: -6rem;
  }

  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 1deg;
    }
    &:nth-child(2) {
      --rotate: -2.5deg;
    }
    &:nth-child(4) {
      --rotate: -2.5deg;
    }
    &:hover {
      --rotate: 3deg;
    }
  }
  a {
    font-size: 3rem;
    text-decoration: none;
    display: block;
    &:hover {
      color: var(--red);
    }
    @media (max-width: 800px) {
      font-size: 2rem;
    }
    /* &[aria-current='page'] */
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li>
          <Link to="/">Fresh Picks</Link>
        </li>

        <li>
          <Link to="/pizzas">Pizza Menu</Link>
        </li>

        <li>
          <Link to="/">
            {' '}
            <Logo />{' '}
          </Link>
        </li>

        <li>
          <Link to="/greenthumbs">Green Thumbs</Link>
        </li>

        <li>
          <Link to="/order">Order Up!</Link>
        </li>
      </ul>
    </NavStyles>
  );
}
