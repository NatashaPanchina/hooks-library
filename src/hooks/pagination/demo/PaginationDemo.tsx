import { usePagination } from '../usePagination';
import styles from './PaginationDemo.module.css';
import { pokemons } from '../utils/data';
import PageButtons from './PageButtons';

export default function PaginationDemo() {
  const {
    result,
    totalPages,
    pageSize,
    currentPage,
    changeCurrentPage,
    changePageSize,
  } = usePagination(pokemons, {
    pageSize: 7,
    defaultPage: 1,
  });

  return (
    <div className={styles.container}>
      <div className={styles.header}>USEPAGINATION</div>
      <div className={styles.count_buttons_container}>
        <button
          className={`${styles.count_button} ${
            pageSize === 5 ? styles.count_active : ''
          }`}
          data-testid="5"
          onClick={() => changePageSize(5)}
        >
          5
        </button>
        <button
          className={`${styles.count_button} ${
            pageSize === 10 ? styles.count_active : ''
          }`}
          data-testid="10"
          onClick={() => changePageSize(10)}
        >
          10
        </button>
        <button
          className={`${styles.count_button} ${
            pageSize === 15 ? styles.count_active : ''
          }`}
          onClick={() => changePageSize(15)}
        >
          15
        </button>
        <button
          className={`${styles.count_button} ${
            pageSize === 20 ? styles.count_active : ''
          }`}
          onClick={() => changePageSize(20)}
        >
          20
        </button>
        <div>items</div>
      </div>
      <div className={styles.list_container}>
        <div className={styles.list_item}>
          <div className={styles.number}>№</div>
          <div className={styles.appearance_title}>Appearance</div>
          <div className={styles.name_title}>Name</div>
          <div className={styles.height_title}>Height</div>
          <div className={styles.weight_title}>Weight</div>
        </div>
        {result.map((value) => (
          <div key={value.name} className={styles.list_item}>
            <div className={styles.number}>{value.number}</div>
            <div className={styles.appearance}>
              <img className={styles.gif} src={value.gif} />
            </div>
            <div className={styles.name}>{value.name}</div>
            <div className={styles.height}>{value.height}</div>
            <div className={styles.weight}>{value.weight}</div>
          </div>
        ))}
      </div>
      <PageButtons
        totalPages={totalPages}
        currentPage={currentPage}
        changeCurrentPage={changeCurrentPage}
      />
    </div>
  );
}
