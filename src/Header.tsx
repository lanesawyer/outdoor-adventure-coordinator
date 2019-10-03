import React from "react";

// @ts-ignore
import { Pane, Heading, Button } from "evergreen-ui";

const Header: React.FC = () => {
  const clearLocalStorage = () => {
    localStorage.removeItem("gearList");
    // window.location.reload()
  };

  return (
    <header>
      <Pane>
        <Heading size={900}>Outdoor Adventure Coordinator</Heading>
        <Button appearance="primary" onClick={clearLocalStorage()}>
          Clear Local Storage (temporary dev button)
        </Button>
      </Pane>
    </header>
  );
};

export default Header;
