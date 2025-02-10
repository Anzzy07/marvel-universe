interface PaginationProps {
  page: number;
  setPage: (page: number) => void;
}

export const Pagination = ({ page, setPage }: PaginationProps) => {
  return (
    <div className="flex justify-center mt-4">
      <button
        className="px-4 py-2 bg-gray-300 rounded-md mx-2"
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
      >
        Prev
      </button>
      <span className="px-4 py-2">{page}</span>
      <button
        className="px-4 py-2 bg-gray-300 rounded-md mx-2"
        onClick={() => setPage(page + 1)}
      >
        Next
      </button>
    </div>
  );
};
