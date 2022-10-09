import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface ChipProps {
  label: string;
}

const Chip: FunctionComponent<ChipProps> = ({ label }) => (
  <ChipText>{label}</ChipText>
);

export default Chip;

const ChipText = styled.p`
  font-size: 0.7rem;
  background: linear-gradient(to right, #6190e8, #a7bfe8);
  color: #fff;
  padding: 0.3rem 0.5rem;
  border-radius: 5px;
  width: fit-content;
  text-transform: capitalize;
`;