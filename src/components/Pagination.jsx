import {
  MdKeyboardArrowLeft,
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
} from "react-icons/md";

const Pagination = () => {
  return (
    <div className="page-btn">
      <button>
        <MdKeyboardArrowLeft className="arrow" />
      </button>
      <p className="page-number">1</p>
      <button>
        <MdKeyboardArrowRight className="arrow" />
      </button>
      <button>
        20/page{" "}
        <span>
          <MdKeyboardArrowDown />
        </span>
      </button>
    </div>
  );
};
export default Pagination;
