import { createContext, useReducer } from "react";
import logReducer, { initialState } from "reducers/useLogReducer";
import { groupBy } from "utils";
import { getLogs } from "api/logApi";
import { setLogs, setPaginationIndex } from "reducers/actions";
import { addlog } from "api/logApi";

export const LogContext = createContext(initialState);

function LogProvider({ children }) {
  const [state, dispatch] = useReducer(logReducer, initialState);
  const value = {
    state,
    getLogs: () => {
      getLogs().then((response) => {
        const data = groupBy(response);
        dispatch(setLogs(data.reverse()));
      });
    },
    addLog: (body) => {
      addlog(body).then(({ data }) => {
        const logs = state.logs;
        const { date } = data;
        const findIndex = logs.findIndex((item) => item.includes(date));
        let item;
        if (findIndex > -1) {
          item = logs[findIndex];
          const [itemDate, itemLogArray] = item;
          itemLogArray.push(data);
          logs[findIndex] = [itemDate, itemLogArray];
          dispatch(setLogs(logs));
        } else {
          item = [date, [data]];
          logs.unshift(item);
          dispatch(setLogs(logs));
        }
      });
    },
    setPaginationIndex: (index) => dispatch(setPaginationIndex(index)),
  };
  return <LogContext.Provider value={value}>{children}</LogContext.Provider>;
}

export default LogProvider;
