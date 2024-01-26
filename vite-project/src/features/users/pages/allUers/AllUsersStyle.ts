import styled from 'styled-components';


export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background-color: #E6F7EA; /* ירוק בהיר */
  }

  &:nth-child(odd) {
    background-color: #C1F1D1; /* ירוק מאוד בהיר */
  }

  border: 1px solid #ddd;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #f2f2f2;
  }
`;

export const TableHeader = styled.th`
  background-color: #4CD164; /* ירוק כהה */
  color: #ffffff;
  padding: 10px;
  text-align: left;
`;

export const TableCell = styled.td`
  padding: 10px;
`;

export const ActionButton = styled.button`
  background-color: #2F8538; /* צבע ירוק כהה */
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  margin: 3px;
  border-radius: 10%;

`;
