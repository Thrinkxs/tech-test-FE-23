import styled from "styled-components";

export const Title = styled.h1`
  margin: 0 5em;
  padding: 1em;
`;

export const H3 = styled.h3`
  &::before {
    content: "";
    display: inline-block;
    width: 13px;
    height: 1.5em;
    background-color: #999dff;
    vertical-align: middle;
    margin-right: 1em; 
  }
`;
// paid color: #60ca57