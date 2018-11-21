import { ChangeComponentAction } from '../actions';
import { SELECT_COMPONENT } from '../constants';
import { IStoreState } from '../types';

export function selectComponent(state: IStoreState, action: ChangeComponentAction): IStoreState {
  switch (action.type) {
    case SELECT_COMPONENT:
      return { ...state, selectedComponent: action.selectedComponent };
  }
  return state;
}