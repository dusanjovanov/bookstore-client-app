import React from "react";
import { GridColumn, Header } from "semantic-ui-react";
import TopList from "./TopList";

const Side = () => {
  return (
    <GridColumn
      mobile={16}
      tablet={6}
      computer={4}
      as="aside"
      css={`
        border-left: 1px solid #ccc;
      `}
    >
      <Header as="h2">Top list</Header>
      <TopList />
    </GridColumn>
  );
};

export default Side;
