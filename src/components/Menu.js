import { Menu as AntDMenu } from "antd";
import { useState } from "react";
import { Link } from "react-router-dom";
import { PictureOutlined, UploadOutlined } from "@ant-design/icons";

const Menu = () => {
  const [currentlySelected, setCurrentlySelected] = useState("upload");

  const handleMenuSelection = (e) => {
    setCurrentlySelected(e.key);
  };

  const items = [
    {
      label: <Link to="/gallery">Gallery</Link>,
      key: "gallery",
      icon: <PictureOutlined />,
    },
    {
      label: <Link to="/">Upload Media</Link>,
      key: "upload",
      icon: <UploadOutlined />,
    },
  ];
  return (
    <AntDMenu
      mode="horizontal"
      onClick={handleMenuSelection}
      selectedKeys={[currentlySelected]}
      items={items}
    />
  );
};

export default Menu;