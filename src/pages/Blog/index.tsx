import { FunctionComponent } from 'react';
import { useParams } from 'react-router';

interface BlogProps {}

const Blog: FunctionComponent<BlogProps> = () => {
  const { id } = useParams();

  return <>Blog page {id}</>;
};

export { Blog };
