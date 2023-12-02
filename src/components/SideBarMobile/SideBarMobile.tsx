import React, { useState } from "react";

import { useToggle } from "@/hooks/useToggle";

const SideBarMobile = () => {
  const [isNavOpen, toggleSidebar, toggleValueTrue, toggleValueFalse] =
    useToggle(false);

  return (
    <div>
      <button
        onClick={() => toggleSidebar()}
        className="p-2 bg-blue-500 text-white rounded"
      >
        Toggle Sidebar
      </button>
      {isNavOpen && (
        <div className="fixed right-0 top-0 h-full w-64 bg-gray-200 overflow-auto">
          {/* Sidebar content goes here */}
        </div>
      )}
    </div>
  );
};

export default SideBarMobile;
