import { FunctionComponent, useEffect, useState } from 'react';
import { Header, SearchBar, Blogs, EmptyList } from '../../components';
import axios from 'axios';
import { blogUrl } from '../../config/API';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [searchKey, setSearchKey] = useState('');
  const [blogs, setBlogs] = useState<Array<any> | undefined>();
  const [filteredBlogs, setFilteredBlogs] = useState<Array<any> | undefined>();

  useEffect(() => {
    fetchBlogs();
  }, []);

  useEffect(() => {
    const trimedKey = searchKey.trim();
    if (blogs && trimedKey)
      setFilteredBlogs(
        blogs.filter(blog =>
          blog.category.toLowerCase().includes(searchKey.toLowerCase().trim())
        )
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogs]);

  const fetchBlogs = () => {
    axios.get(blogUrl as string).then(res => {
      const { data, errorNum } = res.data;
      if (errorNum === 0) setBlogs(data);
    });
  };

  const clearSearch = () => {
    setSearchKey('');
    setFilteredBlogs(undefined);
  };

  const handleSearchSubmit = (e: any) => {
    e.preventDefault();
    fetchBlogs();
    if (!searchKey.trim()) setFilteredBlogs(undefined);
  };

  return (
    <div>
      {/* page header */}
      <Header />
      {/* Search bar */}
      <SearchBar
        value={searchKey}
        setSearchKey={setSearchKey}
        clearSearch={clearSearch}
        handleSearchSubmit={handleSearchSubmit}
      />
      {/* Blog list */}
      {filteredBlogs ? (
        filteredBlogs.length < 1 ? (
          <EmptyList />
        ) : (
          <Blogs blogs={filteredBlogs} />
        )
      ) : (
        <Blogs blogs={blogs} />
      )}
    </div>
  );
};

export { Home };
