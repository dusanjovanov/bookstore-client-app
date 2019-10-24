import React from "react";
import { List, ListHeader } from "semantic-ui-react";
import styled from "styled-components";
import { onImageError } from "../util";

const TopListItem = () => {
  return (
    <List.Item>
      <MyImage
        className="ui image"
        src={`https://picsum.photos/seed/${Math.random()}/200/250`}
        alt="bookTitle"
        onError={onImageError}
      />
      <List.Content>
        <ListHeader as={MyListHeader}>Title</ListHeader>
        <List.Description>Author</List.Description>
      </List.Content>
    </List.Item>
  );
};

export default TopListItem;

const MyImage = styled.img`
  && {
    max-width: 100px;
    min-height: 125px;
  }
`;

const MyListHeader = styled.div`
  font-size: 1.2em;
`;
