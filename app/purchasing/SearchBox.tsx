import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

const SearchBox: React.FC = () => (
  <>
    <Search placeholder="input search text" enterButton="Search" size="large" />
    <br />
  </>
);

export default SearchBox;