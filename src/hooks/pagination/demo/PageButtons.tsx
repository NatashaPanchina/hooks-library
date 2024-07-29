/// <reference types="vite-plugin-svgr/client" />

import styles from './PaginationDemo.module.css';
import { getPages, isDisplayDots } from './utils';
import PrevIcon from '../../../assets/icons/arrowLeft.svg?react';
import NextIcon from '../../../assets/icons/arrowRight.svg?react';
import React from 'react';

interface PropTypes {
  totalPages: number[];
  currentPage: number;
  changeCurrentPage: (page?: number) => void;
}

export default function PageButtons({
  totalPages,
  currentPage,
  changeCurrentPage,
}: PropTypes) {
  const pages = getPages(totalPages, currentPage);
  const dots = isDisplayDots(pages);

  return (
    <div className={styles.buttons_container}>
      <div
        className={styles.nav_icon}
        onClick={() => changeCurrentPage(currentPage - 1)}
      >
        <PrevIcon />
      </div>
      {pages.map((page, index, array) => {
        return (
          <React.Fragment key={page}>
            {index === 1 && dots.start ? <span>...</span> : null}
            <button
              className={`${styles.button} ${
                page === currentPage ? styles.active : ''
              }`}
              onClick={() => changeCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
            {index === array.length - 2 && dots.end ? <span>...</span> : null}
          </React.Fragment>
        );
      })}
      <div className={styles.nav_icon} onClick={() => changeCurrentPage()}>
        <NextIcon />
      </div>
    </div>
  );
}
