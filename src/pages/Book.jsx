import React from "react";
import { Button, Icon, Image, Grid, GridColumn } from "semantic-ui-react";

const Book = () => {
  return (
    <Grid>
      <GridColumn mobile={16} tablet={16} computer={7}>
        <Image
          src={`https://picsum.photos/300/450`}
          css={`
            width: 100%;
            min-width: 300px;
            object-fit: cover;
          `}
        />
      </GridColumn>
      <GridColumn
        mobile={16}
        tablet={16}
        computer={9}
        css={`
          padding: 0 20px;
        `}
      >
        <h1
          css={`
            margin: 0;
            // text-align: right;
          `}
        >
          Where no eagles fly
        </h1>
        <h2
          css={`
            margin: 0;
            font-size: 1.6em;
            color: #555;
            // text-align: right;
          `}
          className="mb2"
        >
          Julian Casablancas
        </h2>
        <p>
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
        </p>
        <p>
          <strong>Publish date: </strong>20.10.1963.
        </p>
        <p>
          <strong>Cover: </strong>paperback
        </p>

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
