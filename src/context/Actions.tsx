import { IGearItem } from "../GearItem";

export enum GearListActions {
  ADD_GEAR_ITEM,
  UPDATE_GEAR_ITEM,
  DELETE_GEAR_ITEM
}

export type Action =
  | { type: GearListActions.ADD_GEAR_ITEM; item: IGearItem }
  | { type: GearListActions.UPDATE_GEAR_ITEM; item: IGearItem }
  | { type: GearListActions.DELETE_GEAR_ITEM; item: IGearItem };
