export const demoText = `import { usePagination } from '../usePagination';
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
    <div>
      <div>USEPAGINATION</div>
      <div>
        <button onClick={() => changePageSize(5)}>
          5
        </button>
        <button onClick={() => changePageSize(10)}>
          10
        </button>
        <button onClick={() => changePageSize(15)}>
          15
        </button>
        <button onClick={() => changePageSize(20)}>
          20
        </button>
        <div>items</div>
      </div>
      <div>
        <div>
          <div>№</div>
          <div>Appearance</div>
          <div>Name</div>
          <div>Height</div>
          <div>Weight</div>
        </div>
        {result.map((value) => (
          <div key={value.name}>
            <div>{value.number}</div>
            <div>
              <img src={value.gif} />
            </div>
            <div>{value.name}</div>
            <div>{value.height}</div>
            <div>{value.weight}</div>
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
}`;

export const hookText = `/**
 * A pagination hook
 *
 * @param list the paging data
 * @param options additional options for the pagination.
 * @param options.pageSize number of elements to display for each page.
 * @param options.defaultPage the initial page.
 * @returns the data of the current page, total pages, the current page and the onChange methods for paging input data.
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
};`;

export const api = `interface OptionsType {
  pageSize?: number;
  defaultPage?: number;
}
  
usePagination(list: any[], options: OptionsType = {}) => {
    result: any[],
    totalPages: number[],
    currentPage: number,
    pageSize: number,
    onChange: (current: number, pageSize: number) => void,
    changeCurrentPage: (page?: number) => void,
    changePageSize: (size: number) => void
  }`;
