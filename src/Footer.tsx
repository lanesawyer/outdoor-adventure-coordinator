import React from "react";
import styled from "styled-components";

// @ts-ignore
import { Pane } from "evergreen-ui";

const Footer: React.FC = () => {
  const Footer = styled.footer`
    grid-area: ft;
  `;

  return (
    <Footer>
      <Pane>
        Built with{" "}
        <span role="img" aria-label="love">
          💖
        </span>{" "}
        by Lane Sawyer
      </Pane>
    </Footer>
  );
};

export default Footer;
