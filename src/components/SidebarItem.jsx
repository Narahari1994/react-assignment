/* eslint-disable react/prop-types */
const SidebarItem = ({ id, icon, title, active, handleClick }) => {
  return (
    <div
      className={active ? "sidebar-icon-active" : "sidebar-icon"}
      onClick={() => handleClick(id)}
    >
      <span className="icon">{icon}</span>
      <p className={active ? "title-color" : ""}>{title}</p>
    </div>
  );
};
export default SidebarItem;
