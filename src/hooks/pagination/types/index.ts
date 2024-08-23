export interface PageButtonsTypes {
  totalPages: number[];
  currentPage: number;
  changeCurrentPage: (page?: number) => void;
}
