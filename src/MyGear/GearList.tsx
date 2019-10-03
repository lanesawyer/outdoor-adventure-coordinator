import React from "react";
import uuid from "uuid/v4";

import { useGearListContext } from "../context/GearListContext";
import GearItem from "./GearItem";

const GearList: React.FC = () => {
  const [items] = useGearListContext();

  return (
    <ul>
      {items.map((gear: any) => (
        <GearItem key={uuid()} name={gear.name} tags={gear.tags} />
      ))}
    </ul>
  );
};

export default GearList;
