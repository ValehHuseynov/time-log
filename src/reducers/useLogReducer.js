import { actionList } from "reducers/actions";

export const initialState = {
  logs: null,
  totalCount: 0,
  startIndex: 0,
  endIndex: 0,
};

const logReducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case actionList.SetLogs:
      return { ...state, logs: payload, totalCount: payload.length };
    case actionList.SetIndex:
      const { startIndex, endIndex } = payload;
      return { ...state, startIndex, endIndex };
    default:
      return state;
  }
};

export default logReducer;
