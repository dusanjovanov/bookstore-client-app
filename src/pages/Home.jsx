import React from "react";
import { Header } from "semantic-ui-react";
import ResultsGrid from "../components/ResultsGrid";

const Main = () => {
  return (
    <>
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
    </>
  );
};

export default Main;
