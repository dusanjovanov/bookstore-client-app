import React from "react";
import { Grid } from "semantic-ui-react";
import ResultItem from "./ResultItem";

const ResultsGrid = () => {
  return (
    <Grid>
      {Array(15)
        .fill(0)
        .map((_, idx) => (
          <ResultItem key={idx} />
        ))}
    </Grid>
  );
};

export default ResultsGrid;
