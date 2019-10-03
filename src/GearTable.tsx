import React from 'react';

// @ts-ignore
import { Table } from 'evergreen-ui';

import GearItem, { IGearItem } from './GearItem';

interface GearTable {
    items: IGearItem[];
}

const GearTable: React.FC<GearTable> = ({items}) => {
  return (
    <Table>
        <Table.Head>
            <Table.TextHeaderCell>
                Owned
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
                Name
            </Table.TextHeaderCell>
            <Table.TextHeaderCell>
                Can Loan
            </Table.TextHeaderCell>
        </Table.Head>
        <Table.Body height={240}>
            {items.map(item => 
                <Table.Row key={item.id}>
                    {<GearItem id={item.id} name={item.name} />}
                </Table.Row>)
            }
        </Table.Body>
    </Table>
  );
}

export default GearTable;
