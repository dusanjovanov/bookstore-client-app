import React from "react";
import { GridColumn } from "semantic-ui-react";
import styled from "styled-components";
import { onImageError } from "../util";
import { Link } from "@reach/router";

const ResultItem = () => {
  return (
    <GridColumn tablet={8} computer={Math.floor(16 / 5)} as={Root}>
      <Link to="/book/1">
        <div>
          <Image
            src={`https://picsum.photos/seed/${Math.random()}/200/250`}
            alt="bookTitle"
            onError={onImageError}
          />
        </div>
        <div>
          <p
            css={`
              font-size: 1.2em;
              margin: 0;
            `}
          >
            <strong>Title</strong>
          </p>
          <p>Author</p>
        </div>
      </Link>
    </GridColumn>
  );
};

export default ResultItem;

const Root = styled.div`
  &&& {
    :hover {
      background-color: rgba(0, 0, 0, 0.03);
    }
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  min-height: 100px;
  object-fit: cover;
`;
