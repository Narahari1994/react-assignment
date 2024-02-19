import SidebarItem from "./SidebarItem";
import { AiOutlineDashboard } from "react-icons/ai";
import { MdOutlineInventory } from "react-icons/md";
import { BsBorderStyle } from "react-icons/bs";
import { MdOutlineLocalShipping } from "react-icons/md";
import { GrChannel } from "react-icons/gr";
import { useState } from "react";

const data = [
  {
    id: 1,
    icon: <AiOutlineDashboard />,
    title: "Dashboard",
    active: false,
  },
  {
    id: 2,
    icon: <MdOutlineInventory />,
    title: "Inventory",
    active: false,
  },
  {
    id: 3,
    icon: <BsBorderStyle />,
    title: "Orders",
    active: false,
  },
  {
    id: 4,
    icon: <MdOutlineLocalShipping />,
    title: "Shipping",
    active: false,
  },
  {
    id: 5,
    icon: <GrChannel />,
    title: "Channel",
    active: false,
  },
];

const Sidebar = () => {
  const [items, setItems] = useState(data);

  const handleClick = (id) => {
    const newItems = items.map((item) =>
      item.id === id ? { ...item, active: !item.active } : item
    );
    setItems(newItems);
  };

  return (
    <section className="sidebar">
      {items.map((item) => {
        return (
          <SidebarItem key={item.id} {...item} handleClick={handleClick} />
        );
      })}
    </section>
  );
};
export default Sidebar;
