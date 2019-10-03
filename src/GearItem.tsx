import React from "react";

// @ts-ignore
import { Checkbox, Switch, Table } from "evergreen-ui";

export interface IGearItem {
  id?: string;
  name: string;
}

const GearItem: React.FC<IGearItem> = ({ id, name }) => {
  const [isOwned, setIsOwned] = React.useState<boolean>(false);

  return (
    <>
      <Table.TextCell>
        <Checkbox
            label={name}
            checked={isOwned}
            onChange={(e: any) => setIsOwned(e.target.checked)}
        />
      </Table.TextCell>
      <Table.TextCell>{name}</Table.TextCell>
      <Table.TextCell>
        <Switch />
      </Table.TextCell>
    </>
  );
};

export default GearItem;
