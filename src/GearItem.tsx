import React from "react";

// @ts-ignore
import { IconButton, Switch, Table } from "evergreen-ui";
import GearTag from "./GearTag";

export interface IGearItem {
    id?: string;
    name: string;
    tags?: string[];
  }

const GearItem: React.FC<IGearItem> = ({ id, name, tags }) => {
  return (
    <>
      <span>{name}</span> {tags && tags.map(tag => <GearTag>{tag}</GearTag>)}
    </>
  );
};

export default GearItem;
