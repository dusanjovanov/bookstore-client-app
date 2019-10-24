import React from "react";
import { Container, Grid, GridColumn } from "semantic-ui-react";
import { createGlobalStyle, css } from "styled-components";
import Footer from "./Footer";
import SiteHeader from "./Header";
import Home from "../pages/Home";
import Side from "./Side";
import { Router } from "@reach/router";
import Book from "../pages/Book";
import Search from "./Search";

const App = () => {
  return (
    <Container>
      <SiteHeader />
      <Grid
        css={`
          &&& {
            margin-top: 20px;
          }
        `}
      >
        <GridColumn
          mobile={16}
          tablet={10}
          computer={12}
          as="main"
          style={{ paddingTop: 0 }}
        >
          <Search />
          <Router>
            <Home path="/" />
            <Book path="/book/:id" />
          </Router>
        </GridColumn>
        <Side />
      </Grid>
      <Footer />
      <GlobalStyle />
    </Container>
  );
};

export default App;

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  a{
    color: #000;
    &:focus{
      color: #000;
    }
    &:hover{
      color: #000;
    }
  }
  ul{
    list-style-type: none;
  }
  ${[0.25, 0.5, 1, 1.5, 3].map(
    (size, sizeIdx) => css`
      ${["top", "right", "bottom", "left"].map(
        side => css`
          .${`m${side[0]}${sizeIdx + 1}`} {
            ${`margin-${side}`}: ${size}em !important;
          }
        `
      )}
    `
  )}
`;
