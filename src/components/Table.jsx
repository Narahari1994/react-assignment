import { CgDollar } from "react-icons/cg";
import TableColumns from "./TableColumns";
import TableRow from "./TableRow";

const tableData = {
  headers: {
    id: Date.now(),
    type: <input type="checkbox" />,
    channel: "Channel",
    orderNo: "Order No",
    orderDate: "Order Date",
    city: "City",
    customerName: "Customer Name",
    orderValue: "Order Value",
    status: "Status",
    operation: "Operation",
  },

  rows: [
    {
      id: Date.now(),
      plus: "+",
      type: <input type="checkbox" />,
      channel: <CgDollar />,
      orderNo: "#TKN20203754",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: 0.0,
      status: "Pending",
      operation: "Actions",
    },
    {
      id: Date.now(),
      plus: "+",
      type: <input type="checkbox" />,
      channel: <CgDollar />,
      orderNo: "#TKN20203753",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: 0.0,
      status: "Pending",
      operation: "Actions",
    },
    {
      id: Date.now(),
      plus: "+",
      type: <input type="checkbox" />,
      channel: <CgDollar />,
      orderNo: "#TKN20203752",
      orderDate: "2022-05-04",
      city: "Lucknow",
      customerName: "Abhishek Dixit",
      orderValue: 0.0,
      status: "Pending",
      operation: "Actions",
    },
  ],
};

const Table = () => {
  return (
    <table>
      <thead>
        <TableColumns {...tableData.headers} />;
      </thead>
      <tbody>
        {tableData.rows.map((eachRow) => {
          return (
            <tr key={eachRow.id}>
              <TableRow {...eachRow} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
export default Table;
