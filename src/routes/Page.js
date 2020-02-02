import React from "react";
import PropTypes from "prop-types";

function Page({ page, pages }) {
  var index = [];
  for (var i = 1; i <= { pages }; i++) {
    if (i === { page }) {
      index.push(
        <div class={i} id="page_active">
          {i}
        </div>
      );
    } else {
      index.push(
        <div class={i} id="page_inactive">
          {i}
        </div>
      );
    }
  }
  return index;
}

Page.propTypes = {
  page: PropTypes.number.isRequired,
  pages: PropTypes.number.isRequired
};

export default Page;
