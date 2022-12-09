import React from "react";
import hackerrankImage from "./hackerrank.jpg";
import { BellIcon, UserCircleIcon } from "@heroicons/react/outline";

function Header() {
  const styles = {
    backgroundImage: `url(${hackerrankImage})`,
  };
  return (
    <div className="w-full py-6 items-center justify-between flex px-12 bg-slate-600">
      <div
        className="items-center w-full justify-center flex px-12 "
        style={styles}
      ></div>
      <div className="items-center justify-end space-x-6 flex w-full">
        <BellIcon className="header-icon" />
        <UserCircleIcon className="header-icon" />
      </div>
    </div>
  );
}

export default Header;
