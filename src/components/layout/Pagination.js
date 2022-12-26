import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";

const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5,
  6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item) => (
          <div className="mb-12 w-[32%]">
            <Product src="assets/images/product1.png" badge={true} />
          </div>
        ))}
    </>
  );
}

const Pagination = ({ itemsPerPage }) => {
  
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="flex flex-wrap gap-x-5">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        marginPagesDisplayed={4}
        pageCount={pageCount}
        pageClassName="page-item"
        pageLinkClassName="inline-block border border-solid border-[#F0F0F0] py-2.5 px-3.5 font-dm font-regular text-sm"
        previousClassName="hidden"
        nextClassName="hidden"
        breakLabel="..."
        breakClassName="mt-3"
        containerClassName="flex gap-x-4 "
        activeClassName="bg-primary font-dm font-regular text-sm text-white"
        renderOnZeroPageCount={null}
      />
      <p className="font-regular absolute bottom-0 right-0 font-dm text-xs text-[#767676] ">
        Products from {itemOffset} to {itemOffset + itemsPerPage} of 80
      </p>
    </>
  );
};

export default Pagination;
