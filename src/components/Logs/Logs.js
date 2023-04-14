import React, { useEffect } from "react";
import Table from "components/Table";
import Pagination from "components/Pagination";
import useLogs from "hooks/useLogs";

function Logs() {
  const { state, getLogs, setPaginationIndex } = useLogs((context) => ({
    getLogs: context.getLogs,
    state: context.state,
    setPaginationIndex: context.setPaginationIndex,
  }));

  const { logs, totalCount, startIndex, endIndex } = state;

  useEffect(() => {
    if (!logs) getLogs();
  }, [getLogs, logs]);

  return (
    <React.Fragment>
      <Table logs={logs} startIndex={startIndex} endIndex={endIndex} />
      <Pagination
        totalCount={totalCount}
        setPaginationIndex={setPaginationIndex}
      />
    </React.Fragment>
  );
}
export default Logs;
