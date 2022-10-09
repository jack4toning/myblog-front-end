import { FunctionComponent, useEffect, useState } from 'react';
import { Header, SearchBar, Blogs } from '../../components';
import axios from 'axios';
import { blogUrl } from '../../config/API';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  const [value, setValue] = useState('');
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    axios.get(blogUrl as string).then(res => {
      const { data, errorNum } = res.data;
      if (errorNum === 0) setBlogs(data);
    });
  }, []);

  const clearSearch = () => {
    setValue('');
  };
  const formSubmit = () => {
    axios.get(blogUrl as string);
  };

  return (
    <div>
      {/* page header */}
      <Header />
      {/* Search bar */}
      <SearchBar
        value={value}
        setValue={setValue}
        clearSearch={clearSearch}
        formSubmit={formSubmit}
      />
      {/* Blog list */}
      <Blogs blogs={blogs} />
    </div>
  );
};

export { Home };
