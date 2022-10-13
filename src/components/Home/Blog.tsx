import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Chip } from '../common';

interface BlogProps {
  blog: any;
}

const Blog: FunctionComponent<BlogProps> = ({ blog }) => {
  const {
    id,
    title,
    category,
    content,
    avatarUrl,
    username,
    coverUrl,
    createtime: createTs,
  } = blog;

  const createtime = new Date(createTs).toLocaleString();

  return (
    <Container>
      <Cover src={coverUrl} alt={'cover'} />
      <Chip label={category} />
      <Title>{title}</Title>
      <Content>{content}</Content>
      <Footer>
        <Author>
          <Avatar src={avatarUrl} alt={'avatar'} />
          <div>
            <h6>{username}</h6>
            <Createtime>{createtime}</Createtime>
          </div>
        </Author>
        <Link
          style={{ textDecoration: 'none', color: 'inherit' }}
          to={`/blogs/${id}`}>
          →
        </Link>
      </Footer>
    </Container>
  );
};

export { Blog };

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cover = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 20px;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  margin: 0.5rem 0 1rem;
  flex: 1;
`;

const Content = styled.p`
  position: relative;
  max-height: 50px;
  font-size: 0.8rem;
  /* padding-right: 0.6rem; */
  overflow: hidden;
  /*将对象作为弹性伸缩盒子模型显示*/
  display: -webkit-box;
  /*设置子元素排列方式*/
  -webkit-box-orient: vertical;
  /*设置显示的行数，多出的部分会显示为...*/
  -webkit-line-clamp: 3;
  color: #a9a9a9;
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
`;

const Author = styled.div`
  display: flex;
  align-items: center;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  margin-right: 0.5rem;
`;

const Createtime = styled.p`
  font-size: 0.6rem;
  color: #a9a9a9;
  font-weight: 600;
`;
