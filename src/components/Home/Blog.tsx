import { FunctionComponent } from 'react';
import styled from 'styled-components';

interface BlogProps {
  blog: any;
}

const Blog: FunctionComponent<BlogProps> = ({ blog }) => {
  const {
    id,
    title,
    category,
    subCategory,
    content,
    authorId,
    coverUrl,
    createtime,
  } = blog;
  return (
    <Container>
      {/* <img src={coverUrl} alt={'cover'} /> */}
      <Image src={coverUrl} alt={'cover'} />
      <p>{title}</p>
    </Container>
  );
};

export { Blog };

const Container = styled.div`
  background-color: #f0f0f0;
  width: fit-content;
  /* margin: 2.5rem auto 4rem auto; */
  padding: 0.5rem;
  border-radius: 5px;
`;

const Image = styled.img`
  width: 300px;
  height: 200px;
`;
