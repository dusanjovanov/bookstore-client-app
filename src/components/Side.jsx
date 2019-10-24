import React from "react";
import { Grid, Header } from "semantic-ui-react";
import TopList from "./TopList";

const Side = () => {
  return (
    <Grid.Column mobile={16} tablet={6} computer={4} as="aside">
      <Header as="h2">Top list</Header>
      <TopList />
    </Grid.Column>
  );
};

export default Side;
