import React from "react";
import { Icon } from "semantic-ui-react";
import styled from "styled-components";

const Nav = () => {
  return (
    <nav>
      <ul>
        <MenuItem className="mr2">
          <Link icon>
            Menu 1
            <Icon name="angle right" as={MyIcon} />
            <Icon name="angle down" as={MyIcon} />
          </Link>
          <Dropdown>
            <DropdownItem>
              <Link>Menu 11</Link>
            </DropdownItem>
            <DropdownItem>
              <Link>Menu 12</Link>
            </DropdownItem>
            <DropdownItem>
              <Link>Menu 13</Link>
            </DropdownItem>
          </Dropdown>
        </MenuItem>
        <MenuItem className="mr2">
          <Link>Menu 2</Link>
        </MenuItem>
        <MenuItem className="mr2">
          <Link>Menu 3</Link>
        </MenuItem>
        <MenuItem className="mr2">
          <Link>Menu 4</Link>
        </MenuItem>
      </ul>
    </nav>
  );
};

export default Nav;

const Dropdown = styled.ul`
  width: 170px;
  text-align: center;
  position: absolute;
  z-index: 10;
  left: 50%;
  top: 100%;
  transform: translate(-50%);
  background-color: #fff;
  display: none;
  border: 1px solid #ccc;
`;

const MyIcon = styled.i`
  && {
    margin: 0;
  }
  transition: all 300ms ease-in-out;
  &.right {
    display: inline-block;
  }
  &.down {
    display: none;
  }
`;

const Link = styled.a`
  font-size: 1.7em;
  cursor: pointer;
  &:hover {
    border-bottom: 2px solid #000;
  }
`;

const MenuItem = styled.li`
  display: inline-block;
  position: relative;
  &:hover {
    & > ${Dropdown} {
      display: block;
    }
    & ${MyIcon} {
      &.down {
        display: inline-block;
      }
      &.right {
        display: none;
      }
    }
  }
`;

const DropdownItem = styled.li`
  padding: 7px 5px;
  cursor: pointer;
  &:hover {
    & > ${Link} {
      border-bottom: 2px solid #000;
    }
  }
`;
