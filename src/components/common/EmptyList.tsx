import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface EmptyListProps {}

export const EmptyList: FunctionComponent<EmptyListProps> = () => (
  <Container>
    <Image src='/assets/images/emptyList.gif' alt='empty list' />
  </Container>
);

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const Image = styled.img`
  max-width: 250px;
  width: 100%;
`;
