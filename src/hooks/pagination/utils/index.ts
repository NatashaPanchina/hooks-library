export const getPages = (list: Array<any>, pageSize: number) => {
  const pages = [];

  if (list.length <= 0) return [];

  for (let i = 1; i <= Math.ceil(list.length / pageSize); i++) {
    pages.push(i);
  }

  return pages;
};

export const getData = (
  data: Array<any>,
  currentPage: number,
  pageSize: number,
) => {
  //indexes of data
  const from = (currentPage - 1) * pageSize;
  const to = pageSize * currentPage - 1;

  if (!currentPage || !pageSize) return [];
  if (!data.length) return [];

  //if data is less than one page size
  if (pageSize > data.length) return data;

  //if fromIndex greater than data
  if (from > data.length - 1) return [];

  //if toIndex greater than data but fromIndex is less than one
  if (to > data.length - 1) return data.slice(from);

  //if toIndex and fromIndex are less data
  return data.slice(from, to + 1);
};
