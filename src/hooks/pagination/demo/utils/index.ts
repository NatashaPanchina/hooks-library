// 100
// ps = 7 => 15 pages //1 2 3 4 5 ... 15 //1 ... 4 5 (6) 7 8 .. 15 //1 ... 11 12 13 14 15
// ps = 5 => 20 pages //1 2 3 4 5 ... 20 //1 ... 4 5 (6) 7 8 .. 20 //1 ... 16 17 18 19 20
// ps = 10 => 10 pages//1 2 3 4 5 ... 10 //1 ... 4 5 (6) 7 8 .. 10 //1 ... 6 7 8 9 10
// ps = 15 => 7 pages //1 2 3 4 5 6 7
// ps = 20 => 5 pages //1 2 3 4 5
export const getPages = (pages: number[], currentPage: number) => {
  const lastPage = pages.length;

  if (lastPage <= 7) return pages;

  if (currentPage <= 5) return [1, 2, 3, 4, 5, lastPage];

  if (currentPage >= lastPage - 4)
    return [
      1,
      lastPage - 4,
      lastPage - 3,
      lastPage - 2,
      lastPage - 1,
      lastPage,
    ];

  return [
    1,
    currentPage - 2,
    currentPage - 1,
    currentPage,
    currentPage + 1,
    currentPage + 2,
    lastPage,
  ];
};

export const isDisplayDots = (pages: number[]) => {
  const result = { start: false, end: false };
  const lastPage = pages[pages.length - 1];

  if (!pages.length) return result;
  if (pages.length <= 5) return result;
  if (pages.join() === '1,2,3,4,5,6') return result;
  if (pages.join() === '1,2,3,4,5,6,7') return result;
  if (pages[1] !== 2) result.start = true;
  if (lastPage - 1 !== pages[pages.length - 2]) result.end = true;

  return result;
};
