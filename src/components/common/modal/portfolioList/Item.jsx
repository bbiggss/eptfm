import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const renderTextWithLineBreaks = (text) => {
  return text.split('\n').map((line, index) => (
    <React.Fragment key={index}>
      {line}
      <br />
    </React.Fragment>
  ));
};

const StyledItem = styled.li`
  @media (min-width: 1557px) {
    max-width: 460px;
    width: 23.9vw;
    position: relative;

    color: #ffffff;
    text-align: left;
    font-family: 'NanumSquareB';
    border-bottom: 1px solid transparent;

    list-style: none;

    margin-bottom: 10px;

    p {
      font-size: 15px;
      letter-spacing: -0.02em;
      max-width: 420px;
      width: 21.8vw;
      margin: 5px 0;
      white-space: nowrap;
    }

    .move {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      background: rgba(255, 255, 255, 0);
      border-style: solid;
      border-color: #48c2c5;
      border-width: 0px 0px 1px 0px;
      color: #48c2c5;
      .move {
        display: inline;
      }
    }
  }
  @media (min-width: 1025px) and (max-width: 1556px) {
    width: 460px;
    /* width: 23.9vw; */
    position: relative;

    color: #ffffff;
    text-align: left;
    font-family: 'NanumSquareB';
    border-bottom: 1px solid transparent;

    list-style: none;

    margin-bottom: 10px;

    p {
      font-size: 15px;
      letter-spacing: -0.02em;
      width: 420px;
      /* width: 21.8vw; */
      margin: 5px 0;
      white-space: nowrap;
    }

    .move {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      background: rgba(255, 255, 255, 0);
      border-style: solid;
      border-color: #48c2c5;
      border-width: 0px 0px 1px 0px;
      color: #48c2c5;
      .move {
        display: inline;
      }
    }
  }
  @media (max-width: 1024px) {
    min-width: 315px;
    width: 84vw;
    position: relative;

    color: #ffffff;
    text-align: left;
    font-family: 'NanumSquareB';
    border-bottom: 1px solid transparent;

    list-style: none;

    margin-bottom: 16px;

    p {
      font-size: clamp(16px, 4.2vw, 100px);
      letter-spacing: -0.02em;
      min-width: 275px;
      width: 73vw;
      margin: 5px 0;
    }

    .move {
      display: none;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:hover {
      background: rgba(255, 255, 255, 0);
      border-style: solid;
      border-color: #48c2c5;
      color: #48c2c5;
      border-width: 0px 0px 1px 0px;
      .move {
        display: inline;
      }
    }
  }
`;

const Item = ({ name, setPortfolioListModalStatus, link }) => {
  return (
    <Link onClick={() => setPortfolioListModalStatus(false)} to={link}>
      <StyledItem>
        <p>{renderTextWithLineBreaks(name)}</p>
        <img className="move" src={`${process.env.PUBLIC_URL}/assets/images/common/move.png`} alt="" />
      </StyledItem>
    </Link>
  );
};

export default Item;
