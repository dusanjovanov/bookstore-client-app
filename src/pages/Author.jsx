import React from "react";
import { Grid, GridColumn, Image } from "semantic-ui-react";
import ResultItem from "../components/ResultItem";

const Author = () => {
  return (
    <Grid>
      <GridColumn mobile={16} computer={7}>
        <Image
          src={`https://i.pravatar.cc/300`}
          css={`
            width: 100%;
            min-width: 300px;
            max-height: 400px;
            object-fit: cover;
          `}
        />
      </GridColumn>
      <GridColumn mobile={16} computer={9}>
        <h1
          css={`
            margin: 0;
            margin-bottom: 10px;
          `}
        >
          Julian Casablancas
        </h1>
        <div className="mb2">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics, a large
          language ocean. A small river named Duden flows by their place and
          supplies it with the necessary regelialia. It is a paradisematic
          country, in which roasted parts of sentences fly into your mouth. Even
          the all-powerful Pointing has no control about the blind texts it is
          an almost unorthographic life One day however a small line of blind
          text by the name of Lorem Ipsum decided to leave for the far World of
          Grammar.
        </div>
        <div>
          <h3>Titles by this author:</h3>
          <Grid>
            {Array(3)
              .fill(0)
              .map((_, idx) => (
                <GridColumn key={idx} computer={Math.floor(16 / 3)}>
                  <ResultItem showAuthor={false} />
                </GridColumn>
              ))}
          </Grid>
        </div>
      </GridColumn>
    </Grid>
  );
};

export default Author;
