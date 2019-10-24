import React from "react";
import { List } from "semantic-ui-react";
import TopListItem from "./TopListItem";

const TopList = () => {
  return (
    <List relaxed="very" ordered divided selection>
      {Array(10)
        .fill(0)
        .map((_, idx) => (
          <TopListItem key={idx} />
        ))}
    </List>
  );
};

export default TopList;
