import React from "react";
import { List, ListItem, Icon } from "semantic-ui-react";
import styled from "styled-components";
import { Logo } from "./shared";

const firstList = [
  "Contact",
  "Services",
  "Managment",
  "Corporate",
  "Terms and Conditions"
];

const secondList = ["Offices", "Distribution", "Pricing", "Licensing", "Legal"];

const Footer = () => {
  return (
    <Root>
      <Flex>
        <Logo />
        <div
          css={`
            display: flex;
          `}
        >
          {" "}
          <List
            size="large"
            className="mr5"
            css={`
              &&& {
                margin-top: 1em;
              }
            `}
          >
            {firstList.map(text => (
              <ListItem key={text}>
                <Link>{text}</Link>
              </ListItem>
            ))}
          </List>
          <List
            size="large"
            css={`
              &&& {
                margin-bottom: 1em;
              }
            `}
          >
            {secondList.map(text => (
              <ListItem key={text}>
                <Link>{text}</Link>
              </ListItem>
            ))}
          </List>
        </div>
        <List
          size="large"
          css={`
            &&& {
              margin-right: 30px;
            }
          `}
        >
          <ListItem>
            <Icon name="map marker alternate" />
            123 Park Avenue, New York
          </ListItem>
          <ListItem>
            <Icon name="mail" />
            office@bookstore.com
          </ListItem>
        </List>
      </Flex>
      <div
        className="mt4"
        css={`
          text-align: center;
        `}
      >
        Copyright@2019 Bookstore. All rights reserved.
      </div>
    </Root>
  );
};

export default Footer;

const Root = styled.footer`
  background-color: #d4d4d4;
  padding: 1.5em;
`;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
`;

const Link = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;
