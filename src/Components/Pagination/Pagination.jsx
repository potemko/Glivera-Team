import React from "react";
// import css from "../Pages/Blank.module.css"

const Pagination = ({ perPages, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let index = 1; index <= Math.ceil(totalPages / perPages); index++) {
    pageNumbers.push(index);
  }

  return (
    <div>
      <nav aria-label="...">
        <ul className="pagination pagination-lg" style={{ gap: "12px" }}>
          {pageNumbers.map((number) => (
            <li
              className="page-item"
              key={number}
              style={{

                background: "#F5F5F5",
                border: "1px solid #EEEEEE",
                borderRadius: "4px",
              }}
            >
              <a
                className="page-link "
                style={{

                  border: "1px solid #EEEEEE",
                  borderRadius: "4px",
                  paddingTop: "6px",
                  paddingBottom: "6px",
                  paddingLeft: "9px",
                  paddingRight: "9px",
                }}
                href="#"
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;