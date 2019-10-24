import React from "react";
import { Button, Icon, Image, Grid, GridColumn } from "semantic-ui-react";
import { Link } from "@reach/router";

const Book = () => {
  return (
    <Grid>
      <GridColumn mobile={16} tablet={16} computer={7}>
        <Image
          src={`https://picsum.photos/300/450`}
          css={`
            width: 100%;
            max-height: 450px;
            min-width: 300px;
            object-fit: cover;
          `}
        />
      </GridColumn>
      <GridColumn mobile={16} tablet={16} computer={9}>
        <h1
          css={`
            margin: 0;
          `}
        >
          Where no eagles fly
        </h1>
        <h2
          css={`
            margin: 0;
            font-size: 1.6em;
            color: #555;
          `}
          className="mb2"
        >
          <Link
            to="/author/1"
            css={`
              color: #555;
            `}
          >
            Julian Casablancas
          </Link>
        </h2>
        <div className="mb2">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What's happened
          to me?" he thought. It wasn't a dream. His room, a proper human room
          although a little too small, lay peacefully between its four familiar
          walls.
        </div>
        <div className="mb1">
          <strong>Publish date: </strong>20.10.1963.
        </div>
        <div className="mb3">
          <strong>Cover: </strong>paperback
        </div>

        <div>
          <strong
            className="mr3"
            css={`
              color: green;
            `}
          >
            $10.99
          </strong>
          <Button primary>
            <Icon name="cart" />
            Add to cart
          </Button>
        </div>
      </GridColumn>
    </Grid>
  );
};

export default Book;
