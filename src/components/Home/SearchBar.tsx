import { Dispatch, FunctionComponent, SetStateAction } from 'react';
import styled from 'styled-components';

interface SearchBarProps {
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
  clearSearch: () => void;
  formSubmit: () => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({
  value,
  setValue,
  clearSearch,
  formSubmit,
}) => {
  return (
    <Container>
      <Form onSubmit={formSubmit}>
        <Input
          type='text'
          placeholder='Search By Category'
          value={value}
          onChange={e => {
            setValue(e.target.value);
          }}
        />
        {value && <Span onClick={clearSearch}>X</Span>}
        <Button>Go</Button>
      </Form>
    </Container>
  );
};

export { SearchBar };

const Container = styled.div`
  background-color: #f0f0f0;
  width: fit-content;
  margin: 2.5rem auto 4rem auto;
  padding: 0.5rem;
  border-radius: 5px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  background-color: #f0f0f0;
  outline: none;
  border: none;
`;

const Span = styled.span`
  padding-right: 0.5rem;
  cursor: pointer;
`;

const Button = styled.button`
  outline: none;
  border: none;
  padding: 0.3rem 1rem;
  border-radius: 5px;
  background-color: #0f52ba;
  color: #fff;
  cursor: pointer;
`;
