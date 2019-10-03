import { IGearItem } from "../MyGear/GearItem";
import { Action, GearListActions } from "../context/Actions";

export default (state: IGearItem[], action: Action) => {
    switch (action.type) {
        case GearListActions.ADD_GEAR_ITEM:
            return [
                ...state,
                action.item
            ];
        case GearListActions.UPDATE_GEAR_ITEM:
            return [
                ...state,
                action.item
            ];
        case GearListActions.DELETE_GEAR_ITEM:
            return [
                ...state,
                action.item
            ];
        default:
            return state;
    }
};
