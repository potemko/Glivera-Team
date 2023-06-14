// import React, { useState } from 'react'
import css from "../Pages/Blank.module.css"
import { ReactComponent as SearchFoto } from "../../img/search.svg";

const Search = ({setValue}) => {



  return (
    <form className={css.form}>
                <label className={css.search}>
                  <SearchFoto />
                </label>
                <input
                  className={css.input}
                  placeholder="search"
                  type="text"
                  onChange={(event) => setValue(event.target.value)}
                ></input>
              </form>
  )
}

export default Search