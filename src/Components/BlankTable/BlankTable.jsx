import React from 'react'
import css from "../Pages/Blank.module.css"

const BlankTable = ({ file }) => {
    const { name, company, number, email, country, status } = file;
    return (
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{company}</td>
          <td>{number}</td>
          <td>{email}</td>
          <td>{country}</td>
          <td>
            <span 
            className = {status ? `${css.green}` : `${css.red}`}
            >
            {status ? 'Active' : 'Inactive'}
            </span>
            </td>
        </tr>
      </tbody>
    );
  };

export default BlankTable