import React from "react";
import PropTypes from "prop-types";
import { getNextPage, getPrevPage } from "../routes/Home";
import "./Page.css";

function Page({ page, total_pages }) {
  if (page === 1) {
    return (
      <div className="footer">
        <div className="currnet">{page}</div>
        <div className="next" onClick={this.getNextPage}>
          Next &rarr;
        </div>
      </div>
    );
  } else if (page === total_pages) {
    return (
      <div className="footer">
        <div className="prev" onClick={this.getPrevPage}>
          &larr; Prev
        </div>
        <div className="currnet">{page}</div>
      </div>
    );
  } else {
    return (
      <div className="footer">
        <div className="prev" onClick={this.getPrevPage}>
          &larr; Prev
        </div>
        <div className="currnet">{page}</div>
        <div className="next" onClick={this.getNextPage}>
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
