import React from 'react';

const Table = ({img, name, price, left}) => {
  return (
    <tr className='tr'>
      <td><img src={img} alt="" /></td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{left}</td>
    </tr>
  );
};

export default Table;