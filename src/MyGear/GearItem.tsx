import React from "react";
import uuid from "uuid/v4";

// @ts-ignore
import { TextInputField, TagInput, Button, Icon } from "evergreen-ui";

import { useGearListContext } from "../context/GearListContext";
import GearTag from "./GearTag";
import { GearListActions } from "../context/Actions";

export interface IGearItem {
  id?: string;
  name: string;
  tags?: string[];
}

const GearItem: React.FC<IGearItem> = ({ id, name, tags }) => {
  const [isEditable, setIsEditable] = React.useState<boolean>(false);
  const [internalName, setInternalName] = React.useState<string>(name);
  const [_, dispatch] = useGearListContext();

  if (isEditable) {
    return (
      <>
        <TextInputField
          label="Name"
          value={internalName}
          onChange={(e: any) => setInternalName(e.target.value)}
        />
        <TagInput
          inputProps={{ placeholder: "Add tags..." }}
          values={tags}
          onChange={(tags: string) => {
            console.log(tags);
          }}
        />
        <Button
          onClick={() =>
            dispatch({
              type: GearListActions.UPDATE_GEAR_ITEM,
              item: { id, internalName, tags }
            })
          }
        >
          Save
        </Button>
      </>
    );
  } else {
    return (
      <li key={uuid()}>
        <span>{name}</span>
        {tags && tags.map(tag => <GearTag key={uuid()}>{tag}</GearTag>)}
        <Icon icon="edit" onClick={() => setIsEditable(true)} />
        <Icon icon="add" onClick={() => console.log("wat")} />
      </li>
    );
  }
};

export default GearItem;
