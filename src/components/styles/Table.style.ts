import styled from "styled-components";

export const TableBox = styled.table`
  display: table-caption;
  /* border-collapse: collapse; */
  border-collapse: separate;
  border-spacing: 10px;
  margin: 0 4em;
  min-width: 26em;
  margin-top: 26px;
  text-align: justify;
  overflow: hidden;
  
  & th {
    /* color: #d8dbdc; */
    border-spacing: 2em;
    color: #6f767e;
  }
  & th,
  & td {
    padding: 1.4em 5.2em;
    display: table-cell;
    padding-bottom: 1em,

  }
`;
