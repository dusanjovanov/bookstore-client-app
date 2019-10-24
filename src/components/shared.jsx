import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

export const Logo = ({ ...props }) => {
  return (
    <Root {...props}>
      Bookstore <Icon name="book" />
    </Root>
  );
};

const Root = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;
