import React from "react";

// @ts-ignore
import { Pane } from "evergreen-ui";

const Footer: React.FC = () => {
  return (
    <footer>
      <Pane>
        Built with{" "}
        <span role="img" aria-label="love">
          💖
        </span>{" "}
        by Lane Sawyer
      </Pane>
    </footer>
  );
};

export default Footer;
