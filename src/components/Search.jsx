import React from "react";
import { Input } from "semantic-ui-react";

const Search = () => {
  return (
    <Input
      type="text"
      icon="search"
      size="large"
      fluid
      placeholder="Search for books and authors"
    />
  );
};

export default Search;
