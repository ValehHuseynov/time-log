import React from "react";
import { format } from "date-fns";
import "./Table.css";

function Table({ logs, startIndex, endIndex }) {
  const dateNow = format(new Date(), "dd.MM.yyyy");
  let today;
  let tableItems = logs?.slice(startIndex, endIndex + 1);
  return (
    <div>
      {tableItems?.map((log, index) => {
        const [date, items] = log;
        today = dateNow === date ? "Today" : date;
        return (
          <React.Fragment key={index}>
            <h2>{today}</h2>
            <table className="Table">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Time spent</th>
                  <th>Date</th>
                </tr>
              </thead>

              <tbody>
                {items?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.description}</td>
                    <td>{item.timeSpent}</td>
                    <td>{item.createDate}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Table;
