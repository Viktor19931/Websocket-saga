import { getType } from 'typesafe-actions';
import { Reducer } from 'redux';

import * as actions from './actions';
import { Actions, ReducerData } from './types';

const initialState = {
  list: ['1', '2'],
  isError: false,
  isPending: false,
};

const reducer: Reducer<ReducerData, Actions> = (
  state = initialState,
  action
) => {
  switch (action.type) {
    case getType(actions.websocketNewPayload):
      const newList = [...state.list];
      newList.push(action.payload);

      return { ...state, list: newList };
    default:
      return state;
  }
};

export default reducer;
