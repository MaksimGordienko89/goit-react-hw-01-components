import styled from 'styled-components';

export const Table = styled.table`
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin: 0 auto 30px;
  text-align: center;
  border-collapse: collapse;
  border-radius: 10px;
  background-color: #c9cbdc;
  th {
    color: white;
    width: 150px;
    border: 2px solid #c0c0c0;
    padding: 10px;
    background-color: #5e68e5;
  }

  td {
    width: 150px;
    padding: 10px;
    border: 2px solid white;
  }
  tr:nth-child(odd) {
    background-color: #d7d9f4;
  }
`;
export const TableHead = styled.thead`
  background-color: rgba(20, 204, 214, 0.82);
`;
