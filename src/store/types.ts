import { ActionType } from 'typesafe-actions';
import * as actions from './actions';

export type Actions = ActionType<typeof actions>;

export type ChartData = {
  low: number;
  time: string;
  open: number;
  high: number;
  close: number;
  volume: number;
  ticker: string;
};

export type ListData = ChartData[] | null;

export type ReducerData = {
  list: ListData;
};

export type AppState = ReducerData;
