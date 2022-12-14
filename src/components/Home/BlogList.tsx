import { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Blog } from './Blog';

interface BlogListProps {
  blogs: any[] | undefined;
}

const BlogList: FunctionComponent<BlogListProps> = ({ blogs }) => {
  return (
    <Container>
      {blogs && blogs.map(blog => <Blog blog={blog} key={blog.id} />)}
    </Container>
  );
};

export { BlogList };

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;
  justify-items: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
