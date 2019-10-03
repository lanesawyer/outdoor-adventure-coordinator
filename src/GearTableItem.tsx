import React from "react";

// @ts-ignore
import { IconButton, Switch, Table } from "evergreen-ui";

import { IGearItem } from "./GearItem";

const GearItem: React.FC<IGearItem> = ({ id, name }) => {
  return (
    <>
      <Table.TextCell flex={1}>
        {name}
      </Table.TextCell>
      <Table.TextCell flex={5}>
        <Switch />
      </Table.TextCell>
      <Table.TextCell flex={1}>
        <IconButton icon="trash" intent="danger" />
      </Table.TextCell>
    </>
  );
};

export default GearItem;
