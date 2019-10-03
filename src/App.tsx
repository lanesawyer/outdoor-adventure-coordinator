import React from 'react';
import uuid from 'uuid/v4';

// @ts-ignore
import { Pane, Heading, TextInputField, Button } from 'evergreen-ui';

import { IGearItem } from './GearItem';
import GearTable from './GearTable';

const App: React.FC = () => {

  const [newGear, setNewGear] = React.useState<string>('');

  const [gearList, setGearList] = React.useState<Array<IGearItem>>(
   JSON.parse(localStorage.getItem('gearList')!) || []
  );

  React.useEffect(() => {
    localStorage.setItem('gearList', JSON.stringify(gearList));
  }, [gearList]);

  return (
    <>
      <header>
        <Pane>
          <Heading size={900}>Outdoor Adventure Coordinator</Heading>
        </Pane>
      </header>
      <main>
        <Pane>
          <Heading size={600}>Master Gear List</Heading>
          <TextInputField
            value={newGear}
            onChange={(e: any) => setNewGear(e.target.value)}
            label="Equipment"
            placeholder="Add equipment"
          />
          <Button appearance="primary" onClick={() => setGearList(gearList.concat({ id: uuid(), name: newGear }))}>Add</Button>
          <ul>
            { gearList.map((gear) => <li key={uuid()}>{gear.name}</li>) }
          </ul>
        </Pane>
        <Pane>
          <Heading size={600}>My Gear List</Heading>
          <GearTable items={gearList} />
        </Pane>
      </main>
      <footer>
        Built with <span role="img" aria-label="love">💖</span> by Lane Sawyer
      </footer>
    </>
  );
}

export default App;
