import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Actions = ActionType<typeof actions>;

export type ReducerData = {
  list: any;
};

export type AppState = ReducerData;
