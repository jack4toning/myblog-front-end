import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { fetchRCblogListActionCreator } from '../../state/slices';
import { blogUrl } from '../../config/API';

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  const dispatch = useDispatch();

  const fetchBlogs = () => {
    dispatch<any>(fetchRCblogListActionCreator(blogUrl));
  };

  return (
    <Container>
      <Header2>Inc. This morning</Header2>
      <Header1>
        <Span>“</Span> <BlogText onClick={fetchBlogs}>Blog</BlogText>{' '}
        <Span>”</Span>
      </Header1>
      <Para>
        awesome place to make oneself <br /> productive and entertained through
        daily updates.
      </Para>
    </Container>
  );
};

export { Header };

const Container = styled.div`
  text-align: center;
`;

const Header2 = styled.h2`
  color: #0080ff;
  font-size: 2rem;
`;

const Header1 = styled.h1`
  color: #0f52ba;
  font-size: 3rem;
  margin-bottom: 1rem;
`;

const Span = styled.span`
  color: #b0c4de;
`;

const Para = styled.p`
  color: #a9a9a9;
  font-weight: 500;
`;

const BlogText = styled.span`
  cursor: pointer; ;
`;
