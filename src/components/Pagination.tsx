import React from 'react';

interface PaginationProps {
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, onPageChange }) => {
  const getPages = () => {
    const pages = [];
    const startPage = Math.max(0, currentPage - 2);
    const endPage = startPage + 4;

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const handlePageChange = (page: number) => {
    if (page >= 0) {
      onPageChange(page);
    }
  };

  return (
    <div className="fixed bottom-1 left-0 md:relative w-full flex justify-center p-2 rounded-t-2xl">
      <div className="flex justify-center space-x-0 bg-slate-500 rounded-2xl">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          className={`px-4 py-2 bg-slate-500 text-white rounded-l-2xl ${currentPage === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
          disabled={currentPage === 0}
        >
          &lt;
        </button>
        {getPages().map(page => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={`px-4 py-2 ${currentPage === page ? 'bg-slate-600 text-white' : 'bg-slate-500 text-white'}`}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          className="px-4 py-2 bg-slate-500 text-white rounded-r-2xl"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Pagination;
