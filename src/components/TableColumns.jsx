/* eslint-disable react/prop-types */
const TableColumns = ({
  type,
  channel,
  orderNo,
  orderDate,
  city,
  customerName,
  orderValue,
  status,
  operation,
}) => {
  return (
    <tr>
      <th className="type">{type}</th>
      <th>{channel}</th>
      <th>{orderNo}</th>
      <th>{orderDate}</th>
      <th>{city}</th>
      <th>{customerName}</th>
      <th>{orderValue}</th>
      <th>{status}</th>
      <th>{operation}</th>
    </tr>
  );
};
export default TableColumns;
