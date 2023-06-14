import React, { useState } from "react";
import css from "./Blank.module.css";
import PropTypes from "prop-types";
import BlankTable from "../BlankTable/BlankTable";
import Search from "../Search/Search";
import Pagination from "../Pagination/Pagination";

const Blank = ({ items }) => {
  const [value, setValue] = useState("");
  const [currentPages, setCurrentPages] = useState(1);
  const [perPages] = useState(5);
  const lastElement = currentPages * perPages;
  const firstElement = lastElement - perPages;

  const startElement = (currentPages - 1) * perPages
  const firstPage = startElement + 1;
  const secondPage = Math.min(startElement + perPages, items.length)

  const filterName = items.filter((item) => {
    const matchesName = item.name.toLowerCase().includes(value.toLowerCase());
    const matchesCompany = item.company
      .toLowerCase()
      .includes(value.toLowerCase());
    const matchesNumber = item.number
      .toLowerCase()
      .includes(value.toLowerCase());
    const matchesEmail = item.email.toLowerCase().includes(value.toLowerCase());
    const matchesCountry = item.country
      .toLowerCase()
      .includes(value.toLowerCase());

    return (
      matchesName ||
      matchesCompany ||
      matchesNumber ||
      matchesEmail ||
      matchesCountry
    );
  });

  const currentElement = filterName.slice(firstElement, lastElement);

const paginate = paginateNumber => setCurrentPages(paginateNumber)


  return (
    <section className={css.blank}>
      <h1 className={css.title}>Hello Evano 👋🏼</h1>
      <div className={css.tableInfo}>
        <div className={css.searchTitle}>
          <div className={css.listTitle}>
            <h2 className={css.itemTitle}>All Customers</h2>
            <p className={css.itemActive}>Active Members</p>
          </div>
          <div>
            <Search setValue={setValue} />
          </div>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th style={{ color: "#B5B7C0" }} scope="col">
                Customer Name
              </th>
              <th style={{ color: "#B5B7C0" }} scope="col">
                Company
              </th>
              <th style={{ color: "#B5B7C0" }} scope="col">
                Phone Number
              </th>
              <th style={{ color: "#B5B7C0" }} scope="col">
                Email
              </th>
              <th style={{ color: "#B5B7C0" }} scope="col">
                Country
              </th>
              <th style={{ color: "#B5B7C0" }} scope="col">
                Status
              </th>
            </tr>
          </thead>
          {currentElement.map((user, index) => (
            <BlankTable file={user} key={index} />
          ))}
        </table>
        <div className={css.pagination}> 
          <div>Showing data {firstPage} to {secondPage} of  {items.length} entries</div>
        <Pagination perPages={perPages} totalPages={items.length} paginate={paginate}/>
        </div>


      </div>
    </section>
  );
};

Blank.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      company: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      country: PropTypes.string.isRequired,
      status: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]).isRequired,

    })
  ).isRequired,
};

export default Blank;