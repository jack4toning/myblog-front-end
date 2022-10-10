import { FunctionComponent } from 'react';
import { useParams } from 'react-router';

interface BlogDetailsProps {}

const BlogDetails: FunctionComponent<BlogDetailsProps> = () => {
  const { id } = useParams();
  const [BlogDetails, setBlogDetails] = useState();

  return <>BlogDetails page {id}</>;
};

export { BlogDetails };
