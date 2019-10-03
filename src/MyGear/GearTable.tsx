import React, { useContext } from "react";
import uuid from "uuid";

// @ts-ignore
import { Table } from "evergreen-ui";

import GearListContext from "../context/GearListContext";
import GearTableItem from "./GearTableItem";
import { IGearItem } from "./GearItem";

const GearTable: React.FC = () => {
  const [items] = useContext(GearListContext);
  return (
    <Table>
      <Table.Head>
        <Table.TextHeaderCell flex={1}>Name</Table.TextHeaderCell>
        <Table.TextHeaderCell flex={5}>Can Loan</Table.TextHeaderCell>
        <Table.TextHeaderCell flex={1}>Remove From Gear</Table.TextHeaderCell>
      </Table.Head>
      <Table.Body height={240}>
        {items.map((item: IGearItem) => (
          <Table.Row key={uuid()}>
            {<GearTableItem id={item.id} name={item.name} />}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  );
};

export default GearTable;
