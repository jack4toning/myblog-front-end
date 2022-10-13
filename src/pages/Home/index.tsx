import { FunctionComponent, useEffect, useState, CSSProperties } from 'react';
import { Header, SearchBar, BlogList, EmptyList } from '../../components';
import { blogUrl } from '../../config/API';
import { fetchRCblogListActionCreator } from '../../state/slices';
import { useSelector } from '../../state/hooks';
import { useDispatch } from 'react-redux';
import HashLoader from 'react-spinners/HashLoader';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBug } from '@fortawesome/free-solid-svg-icons';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [keyword, setKeyword] = useState('');
  const { blogList, isLoading, error } = useSelector(
    state => state.recommendedBlogList
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBlogs = () => {
    const trimedKeyword = keyword.trim();
    const url = `${blogUrl}?keyword=${trimedKeyword}`;

    dispatch<any>(fetchRCblogListActionCreator(url));
  };

  const clearSearch = () => {
    setKeyword('');
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    fetchBlogs();
  };

  const override: CSSProperties = {
    display: 'block',
    margin: '0 auto',
  };

  // if (error) return <Error error={error} />;

  return (
    <div>
      {/* page header */}
      <Header />
      {/* Search bar */}
      <SearchBar
        value={keyword}
        setKeyword={setKeyword}
        clearSearch={clearSearch}
        handleSearchSubmit={handleSearchSubmit}
      />
      {/* Blog list */}
      {isLoading ? (
        <HashLoader
          loading={isLoading}
          cssOverride={override}
          color={'#0f52ba'}
        />
      ) : error ? (
        <Error>
          <FontAwesomeIcon icon={faBug} color={'#f50202'} />
          <ErrorText>{error}</ErrorText>
        </Error>
      ) : blogList ? (
        <BlogList blogs={blogList} />
      ) : (
        <EmptyList />
      )}
      {/* {blogList ? <BlogList blogs={blogList} /> : <EmptyList />} */}
    </div>
  );
};

export { Home };

const Error = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

const ErrorText = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
`;
