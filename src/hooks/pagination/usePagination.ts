import { useState } from 'react';
import { getData, getPages } from './utils';

interface OptionsType {
  pageSize?: number;
  defaultPage?: number;
}

/**
 * A pagination hook
 *
 * @param list the paging data
 * @param options additional options for the pagination.
 * @param options.pageSize number of elements to display for each page.
 * @param options.defaultPage the initial page.
 * @returns the data of current page, total pages, the current page number and the methods for paging input data.
 */
export const usePagination = (list: Array<any>, options: OptionsType = {}) => {
  const { pageSize = 10, defaultPage = 1 } = options;

  const [size, setSize] = useState(pageSize);
  const [currentPage, setCurrentPage] = useState(defaultPage);
  const result = getData(list, currentPage, size);
  const totalPages = getPages(list, size);

  const onChange = (current: number, pageSize: number) => {
    if (current < 1 || pageSize < 1) return;
    if (current > totalPages.length) return;
    setSize(pageSize);
    setCurrentPage(current);
  };

  const changeCurrentPage = (page?: number) => {
    if (page === undefined) {
      if (currentPage < totalPages.length) {
        setCurrentPage((oldPage) => oldPage + 1);
      }
      return;
    }
    if (page < 1) return;
    if (page <= totalPages.length) {
      setCurrentPage(page);
    }
  };

  const changePageSize = (size: number) => {
    if (size < 1) return;
    setSize(size);
  };

  return {
    result,
    totalPages,
    currentPage,
    pageSize: size,
    onChange,
    changeCurrentPage,
    changePageSize,
  };
};
