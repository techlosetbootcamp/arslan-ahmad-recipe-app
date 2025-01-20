export type SidebarButtonProps = {
  toggleSidebar: () => void;
};

export type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  navItems: { name: string; href: string }[];
};
