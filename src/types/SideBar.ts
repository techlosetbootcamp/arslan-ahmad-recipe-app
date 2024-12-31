export interface SidebarButtonProps {
  toggleSidebar: () => void;
}

export interface SidebarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  navItems: { name: string; href: string }[];
}
