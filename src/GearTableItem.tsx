import React from "react";

// @ts-ignore
import { Icon, Switch, Table } from "evergreen-ui";

import { IGearItem } from "./GearItem";

const GearItem: React.FC<IGearItem> = ({ id, name }) => {
  return (
    <>
      <Table.TextCell flex={1}>{name}</Table.TextCell>
      <Table.TextCell flex={5}>
        <Switch />
      </Table.TextCell>
      <Table.TextCell flex={1}>
        <Icon icon="trash" color="danger" />
      </Table.TextCell>
    </>
  );
};

export default GearItem;
