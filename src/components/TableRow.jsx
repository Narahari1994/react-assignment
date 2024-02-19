/* eslint-disable react/prop-types */
const TableRow = ({
  plus,
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
    <>
      <td>{plus}</td>
      <td>{type}</td>
      <td className="channel">{channel}</td>
      <td className="order-number">{orderNo}</td>
      <td>{orderDate}</td>
      <td>{city}</td>
      <td>{customerName}</td>
      <td>{orderValue.toFixed(1)}</td>
      <td className="pending">{status}</td>
      <td className="operation">{operation}</td>
    </>
  );
};
export default TableRow;
