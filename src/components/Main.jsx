import React from "react";
import Search from "./Search";
import { Grid, Header } from "semantic-ui-react";
import ResultsGrid from "./ResultsGrid";

const Main = () => {
  return (
    <Grid.Column mobile={16} tablet={10} computer={12} as="main">
      <Search />
      <Header
        as="h2"
        css={`
          && {
            @media (max-width: 767px) {
              text-align: center;
            }
          }
        `}
      >
        New titles
      </Header>
      <ResultsGrid />
    </Grid.Column>
  );
};

export default Main;
