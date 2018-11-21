import * as constants from '../constants';

export interface ISelectComponent {
    selectedComponent: string
    type: constants.SELECT_COMPONENT
}

export type ChangePageAction = ISelectComponent

export function SelectComponentAction(selectedComponent: string): ISelectComponent {
    return {
        selectedComponent,
        type: constants.SELECT_COMPONENT
    }
}