import { IoSettingsOutline } from "react-icons/io5";
import { LiaFileImportSolid } from "react-icons/lia";
import { LiaTelegramPlane } from "react-icons/lia";
import { IoPrintOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import Table from "./Table";
import Pagination from "./Pagination";

const data = [
  "Pending",
  "Accepted",
  "AWB Created",
  "Ready to Ship",
  "Completed",
  "Cancelled",
];

const Orders = () => {
  return (
    <div className="orders-container">
      <div className="settings-container">
        <p className="order">
          Orders <span>x</span>
        </p>
        <IoSettingsOutline />
      </div>
      <div className="data-container">
        {data.map((element, index) => (
          <p key={index} className="text">
            {element}
          </p>
        ))}
      </div>
      <div className="table-container">
        <div className="btn-container">
          <div>
            <button>
              <span>
                <LiaFileImportSolid className="import" />
              </span>
              Import Orders
            </button>
            <button disabled>
              <span>
                <LiaTelegramPlane className="import" />
              </span>
              Accept
            </button>
            <button disabled>
              <span>
                <IoPrintOutline className="import" />
              </span>
              Print
            </button>
          </div>
          <button className="refresh-btn">
            <span>
              <LuRefreshCcw />
            </span>
            Refresh
          </button>
        </div>
        <div>
          <Table />
        </div>
        <div className="pagination-container">
          <Pagination />
        </div>
      </div>
    </div>
  );
};
export default Orders;
