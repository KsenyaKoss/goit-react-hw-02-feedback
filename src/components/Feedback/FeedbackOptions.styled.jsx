import styled from 'styled-components';

export const Styledbutton = styled.button`
  padding: 10px 22px;
  border-radius: 4px;
  border: none;
  margin-left: 20px;
  font-size: ${props => props.size || '2rem'};
  background-color: lightgreen;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    background-color: #0d6e2a;
    color: white;
  }
`;
