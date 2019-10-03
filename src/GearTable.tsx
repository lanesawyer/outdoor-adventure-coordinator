import React from 'react';

// @ts-ignore
import { Table } from 'evergreen-ui';

import GearTableItem from './GearTableItem';
import {IGearItem} from './GearItem';

interface GearTable {
    items: IGearItem[];
}

const GearTable: React.FC<GearTable> = ({items}) => {
  return (
    <Table>
        <Table.Head>
            <Table.TextHeaderCell flex={1}>
                Name
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flex={5}>
                Can Loan
            </Table.TextHeaderCell>
            <Table.TextHeaderCell flex={1}>
                Remove From Gear
            </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
            {items.map(item => 
                <Table.Row key={item.id}>
                    {<GearTableItem id={item.id} name={item.name} />}
                </Table.Row>)
            }
        </Table.Body>
    </Table>
  );
}

export default GearTable;
