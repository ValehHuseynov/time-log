import React, { useState, useCallback, useEffect } from "react";
import "./Pagination.css";

function Pagination({ totalCount, setPaginationIndex }) {
  const [state, setState] = useState({
    pages: [],
    currentPage: 1,
    pageSize: 3,
  });

  const getPager = (currentPage, pageSize) => {
    let totalPages = Math.ceil(totalCount / pageSize);

    let startPage, endPage;
    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 2 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    let startIndex = (currentPage - 1) * pageSize;
    let endIndex = Math.min(startIndex + pageSize - 1, totalCount - 1);

    let pages = [...Array(endPage + 1 - startPage).keys()].map(
      (i) => startPage + i
    );

    const pagination = {
      currentPage: currentPage,
      pageSize: pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages,
    };

    setPaginationIndex(pagination);
    return pagination;
  };

  const setPage = (page) => {
    let { pageSize } = state;
    let updateState = getPager(page, pageSize);
    setState(updateState);
  };

  useEffect(() => {
    setPage(1);
  }, [totalCount]);

  const { pages, currentPage, totalPages } = state;

  if (pages.length <= 1) return null;

  return (
    <div className="Pagination">
      <button
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
      >
        &laquo;
      </button>
      {pages.map((page, index) => (
        <button
          key={index}
          className={currentPage === page ? "active" : ""}
          onClick={() => setPage(page)}
        >
          {page}
        </button>
      ))}

      <button
        disabled={currentPage === totalPages}
        onClick={() => setPage(currentPage + 1)}
      >
        &raquo;
      </button>
    </div>
  );
}

export default Pagination;
