import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ info, pageNumber, setPageNumber }) => {
  return (
    <ReactPaginate
      className="pagination justify-content-center gap-4 my-4"
      nextLabel="Next"
      previousLabel="Prev"
      nextClassName="page-link"
      previousClassName="page-link"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      activeClassName="active"
      forcePage={pageNumber===1? 0 : pageNumber-1}
      pageCount={info?.pages}
      onPageChange={(data)=>{
        setPageNumber(data?.selected+1)
      }}
    />
  );
};

export default Pagination;
