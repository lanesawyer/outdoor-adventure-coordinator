import React from 'react';

// @ts-ignore
import { Pane, Heading, TextInputField, Button } from 'evergreen-ui';

const App: React.FC = () => {

  const [newGear, setNewGear] = React.useState<string>('');

  const [gearList, setGearList] = React.useState<Array<string>>(
   JSON.parse(localStorage.getItem('gearList')!) || []
  );

  React.useEffect(() => {
    localStorage.setItem('gearList', JSON.stringify(gearList));
  }, [gearList]);

  return (
    <div className="App">
      <header className="App-header">
        <Pane>
          <Heading size={900}>Outdoor Adventure Coordinator</Heading>
          <TextInputField
            value={newGear}
            onChange={(e: any) => setNewGear(e.target.value)}
            label="Equipment"
            placeholder="Add equipment"
          />
          <Button appearance="primary" onClick={() => setGearList(gearList.concat(newGear))}>Add</Button>
        </Pane>
      </header>
      <Pane>
        <ul>
          { gearList.map((gear) => <li>{gear}</li>) }
        </ul>
      </Pane>
    </div>
  );
}

export default App;
