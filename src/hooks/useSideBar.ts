import { useState } from "react";

const useSideBarHandler = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  return {
    isSidebarOpen,
    setSidebarOpen,
  };
};

export default useSideBarHandler;
