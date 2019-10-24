import React from "react";
import { Grid, GridColumn } from "semantic-ui-react";
import ResultItem from "./ResultItem";

const ResultsGrid = () => {
  return (
    <Grid>
      {Array(15)
        .fill(0)
        .map((_, idx) => (
          <GridColumn key={idx} tablet={8} computer={Math.floor(16 / 5)}>
            <ResultItem />
          </GridColumn>
        ))}
    </Grid>
  );
};

export default ResultsGrid;
