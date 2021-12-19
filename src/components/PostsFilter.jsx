/* eslint-disable react/prop-types */
import React from 'react';
import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostsFilter = ({ filter, setFilter }) => (
  <div>
    <MyInput
      placeholder="Search"
      value={filter.query}
      onChange={(e) => setFilter({ ...filter, query: e.target.value })}
    />
    <MySelect
      value={filter.sort}
      onChange={(selectedSort) => setFilter({ ...filter, sort: selectedSort })}
      defaultValue="Sort"
      options={[
        { value: 'title', name: 'By title' },
        { value: 'body', name: 'By content' },
      ]}
    />
  </div>
);

export default PostsFilter;
