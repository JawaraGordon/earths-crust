import React from 'react';
import styled from 'styled-components';
import stripes from '../assets/images/stripes.svg';
import logobg from '../assets/images/logobg.svg';


const LogoStyles = styled.div`
  /* This value controls the entire size of the logo*/
  font-size: 6px;
  font-size: clamp(1px, 0.65vw, 8px);
  width: 30em;
  height: 30em;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
  margin: 0;
  --borderSize: .5em;
  border-radius: 50%;
  background: white url(${stripes});
  background-size: 150em;
  border: var(--borderSize) solid white;
  display: flex;
  .inner {
    margin: var(--borderSize);
    flex: 1;
    background: url(${logobg});
    display: grid;
    grid-template-rows: 20% 1fr 1fr;
    align-content: center;
    border-radius: 50%;
  }
  .est {
    margin-top: 2rem;
    font-size: 1.5em;
    align-self: center;
  }
  h1 {
    display: grid;
    grid-template-rows: 8fr 2fr;
    align-items: center;
    margin: 0;
    grid-row: 2 / span 2;
    grid-gap: 2em;
    transform: translateY(-0.7em);
  }

  .slices {
    margin-top: -3rem;
    font-size: 3.2em;
    letter-spacing: 0.2em;
    transform: translateY(-0.15em);
  }
  .earths {
    transform: scale(1.4);
    display: block;
    text-shadow: 0.18em 0.18em 0 rgba(0, 0, 0, 0.05);
    perspective: 100px;
  }
  .letter {
    font-size: 4em;
    color: var(--red);
    --scale: 1;
    --rotate: -10deg;
    --translateX: 0;
    --translateY: 0;
    --rotateX: 0deg;
    transform: scale(var(--scale)) rotate(var(--rotate))
      translateX(var(--translateX)) translateY(var(--translateY))
      rotateX(var(--rotateX));
    display: inline-block;
    line-height: 1;
    transition: transform 0.3s;
    &.E {
      --translateX: -0.05;
    }
    &.a {
      --rotate: 2deg;
      --scale: 1.0;
      --translateX: 0.05em;
      --translateY: -0.05em;
    }
    &.r {
      --scale: 0.9;
      --translateY: -0.1em;
      --translateX: 0.1em;
    }
    &.t {
      --rotate: 3deg;
      --scale: 0.9;
      --translateX: 0.1em;
    }
    &.h {
      --rotate: -12deg;
      --scale: 1.2;
      --translateX: 0.07em;
    }
    &.apos {
      --translateX: 0.1em;
    }
    &.s {
      --rotate: 12deg;
      --scale: 0.9;
      --translateY: -0.14em;
    }
  }
`;

export default function Logo() {
  return (
    <LogoStyles className="logo">
      <div className="inner">
        <span className="est">EST 2022</span>
        <h1>
          <span className="earths">
            <span className="letter E">E</span>
            <span className="letter a">a</span>
            <span className="letter r">r</span>
            <span className="letter t">t</span>
            <span className="letter h">h</span>
            <span className="letter apos">'</span>
            <span className="letter s">s</span>
          </span>
          <span className="slices">Crust</span>
        </h1>
      </div>
    </LogoStyles>
  );
}
