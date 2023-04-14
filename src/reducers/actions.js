export const actionList = {
  SetLogs: "[Set Log] action",
  SetIndex: "[Set Index] action",
};

export const setLogs = (logs) => {
  return {
    type: actionList.SetLogs,
    payload: logs,
  };
};

export const setPaginationIndex = (index) => {
  return {
    type: actionList.SetIndex,
    payload: index,
  };
};
