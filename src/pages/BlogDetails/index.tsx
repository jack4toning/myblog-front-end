import { FunctionComponent, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector } from '../../state/hooks';
import { useDispatch } from 'react-redux';
import { fetchblog } from '../../state/slices';
import { Chip } from '../../components';

interface BlogDetailsProps {}

const BlogDetails: FunctionComponent<BlogDetailsProps> = () => {
  const { id } = useParams();
  const { blog, isLoading, error } = useSelector(state => state.blog);
  const { title, subCategory: subCG, createtime: createTs } = blog;

  const subCategory = subCG ? subCG.split() : subCG;
  const createtime = new Date(createTs).toLocaleString();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(fetchblog(id));
  }, [dispatch, id]);

  return (
    <div>
      <Link to='/'>
        <span>&#8592;</span> Go Back
      </Link>

      {blog ? (
        <div>
          <header>
            <p>Published at {createtime}</p>
            <h1>{title}</h1>
            <div>
              {subCategory &&
                subCategory.map((category: string, index: number) => (
                  <Chip key={index} label={category} />
                ))}
            </div>
          </header>
        </div>
      ) : (
        123
      )}
    </div>
  );
};

export { BlogDetails };
