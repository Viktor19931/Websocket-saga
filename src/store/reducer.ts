import { getType } from 'typesafe-actions';
import { Reducer } from 'redux';

import * as actions from './actions';
import { Actions, ReducerData } from './types';

const initialState = {
  list: null,
  isError: false,
  isPending: false,
};

const reducer: Reducer<ReducerData, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(actions.websocketNewPayload):
      const oldBars = state.list || [];
      const newBars = [...oldBars];
      newBars.push(action.payload);

      return { ...state, list: newBars };
    default:
      return state;
  }
};

export default reducer;
