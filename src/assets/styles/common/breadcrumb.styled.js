import styled from 'styled-components';

export const BreadcrumbBox = styled.div`
  /* background-color: yellow; */

  position: relative;
  margin: auto;
  max-width: 1920px;
  width: 80%;
  margin-top: 73px;
  margin-bottom: 73px;

  ul {
    display: flex;
    list-style: none;
    padding: 0;
    li {
      margin-right: 13px;
      color: #767676;
      height: 18.75px;

      a {
        text-decoration: none;
        color: #767676;
      }
    }
  }
`;
