import React from "react";

// @ts-ignore
import { Badge } from "evergreen-ui";

interface IGearTag {
  children: string;
}

const GearTag: React.FC<IGearTag> = ({ children }) => {
  return (
    <Badge color="green" isSolid marginRight={8}>
      {children}
    </Badge>
  );
};

export default GearTag;
