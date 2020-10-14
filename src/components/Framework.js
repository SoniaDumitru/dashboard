import React from 'react'

const Framework = (props) => {

const formatNumber = (number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
};

return(
  <>
    <tr>
      <th>{props.data.name}</th>
      <td>{formatNumber(props.data.stargazers_count)}</td>
      <td>{formatNumber(props.data.subscribers_count)}</td>
      <td>{formatNumber(props.data.forks)}</td>
      <td>{formatNumber(props.data.stargazers_count + props.data.subscribers_count + props.data.forks)}</td>
    </tr>
  </>
  );
};

export default Framework;