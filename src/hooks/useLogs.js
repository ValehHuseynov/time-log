import { useContext } from "react";
import { LogContext } from "contexts/LogContext";

const useLogs = (callBack) => {
  const context = useContext(LogContext);
  return callBack(context);
};

export default useLogs;
