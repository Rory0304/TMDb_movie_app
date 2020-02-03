import React from "react";
import PropTypes from "prop-types";
import "./Page.css";
// import { Link } from "react-router-dom";

function Page({ getPrevPage, getNextPage, page, total_pages }) {
  if (page === 1) {
    return (
      <div className="footer">
        <div className="currnet">
          {page}/{total_pages}
        </div>
        <div className="next" onClick={() => getNextPage()}>
          Next &rarr;
        </div>
      </div>
    );
  } else if (page === total_pages) {
    return (
      <div className="footer">
        <div className="prev" onClick={() => getPrevPage()}>
          &larr; Prev
        </div>
        <div className="currnet">
          {page}/{total_pages}
        </div>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <div className="prev" onClick={() => getPrevPage()}>
          &larr; Prev
        </div>
        <div className="currnet">
          {page}/{total_pages}
        </div>
        <div className="next" onClick={() => getNextPage()}>
          Next &rarr;
        </div>
      </div>
    );
  }
}

Page.propTypes = {
  page: PropTypes.number.isRequired,
  total_pages: PropTypes.number.isRequired
};

export default Page;
