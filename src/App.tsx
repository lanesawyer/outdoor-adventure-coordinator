import React from 'react';
import logo from './logo.svg';
import './App.css';

// @ts-ignore
import { Pane, Heading, TextInputField, Button } from 'evergreen-ui';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Pane>
          <Heading size={900}>Outdoor Adventure Coordinator</Heading>
          <TextInputField
            label="Equipment"
            placeholder="Add equipment"
          />
          <Button appearance="primary">Add</Button>

          
        </Pane>
      </header>
    </div>
  );
}

export default App;
