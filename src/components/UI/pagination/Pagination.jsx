/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { usePagination } from '../../../hooks/usePagination';

const Pagination = ({ totalPages, setCurrentPage, currentPage }) => {
  const pagesArray = usePagination(totalPages);
  return (
    <div className="pages-wrapper">
      {pagesArray.map((p) => (
        <span
          key={p}
          onClick={() => setCurrentPage(p)}
          className={p === currentPage ? 'page current' : 'page'}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
