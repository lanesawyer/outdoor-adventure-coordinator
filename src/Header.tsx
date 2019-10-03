import React from "react";
import { Link as RouterLink } from "react-router-dom";
import styled from "styled-components";

// @ts-ignore
import { Link, Pane, Heading, Button } from "evergreen-ui";

const Header: React.FC = () => {
  const clearLocalStorage = () => {
    localStorage.removeItem("gearList");
    // window.location.reload()
  };

  const Header = styled.header`
    grid-area: hd;
  `;

  const Nav = styled.nav``;

  return (
    <Header>
      <Pane>
        <Heading size={900}>Outdoor Adventure Coordinator</Heading>
        <Button appearance="primary" onClick={clearLocalStorage()}>
          Clear Local Storage (temporary dev button)
        </Button>
      </Pane>
      <Nav>
        <RouterLink to="/crew"><Link href="#" size={500} marginRight={12}>My Crews</Link></RouterLink>
        <RouterLink to="/adventures"><Link href="#" size={500} marginRight={12}>My Adventures</Link></RouterLink>
        <RouterLink to="/gear"><Link href="#" size={500} marginRight={12}>My Gear</Link></RouterLink>
      </Nav>
    </Header>
  );
};

export default Header;
