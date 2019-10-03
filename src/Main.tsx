import React from "react";
import uuid from "uuid/v4";

// @ts-ignore
import { Pane, Heading, Button, TextInputField, Paragraph, toaster } from "evergreen-ui";

import GearTable from "./GearTable";
import GearList from "./GearList";
import { GearListActions } from "./context/Actions";
import { useGearListContext } from "./context/GearListContext";

const Main: React.FC = () => {
  const [newGear, setNewGear] = React.useState<string>("");
  const [gearList, dispatch] = useGearListContext();

  // React.useEffect(() => {
  //   localStorage.setItem('gearList', JSON.stringify(gearList));
  // }, [gearList]);

  return (
    <main>
      <Pane>
        <Heading size={600}>Master Gear List</Heading>
        <TextInputField
          value={newGear}
          onChange={(e: any) => setNewGear(e.target.value)}
          label="Equipment"
          placeholder="Add equipment"
        />
        <Button
          appearance="primary"
          onClick={() => {
            setNewGear("");
            dispatch({
              type: GearListActions.ADD_GEAR_ITEM,
              item: { id: uuid(), name: newGear }
            });
            toaster.success(
                `${newGear} added to master gear list`
              )
          }}
        >
          Add Gear
        </Button>
        <GearList />
      </Pane>
      <Pane>
        <Heading size={600}>My Gear List</Heading>
        <Paragraph>Currently this mirrors the master list instead of being able to add and remove from master list. Delete doesn't work.</Paragraph>
        <GearTable />
      </Pane>
    </main>
  );
};

export default Main;
