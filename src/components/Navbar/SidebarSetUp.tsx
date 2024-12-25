interface SidebarButtonProps {
  toggleSidebar: () => void;
}

const SidebarButton: React.FC<SidebarButtonProps> = ({ toggleSidebar }) => {
  return (
    <>
      <div className="lg:hidden flex items-center">
        <button onClick={toggleSidebar}>
          <svg
            className="w-6 h-6 text-gray-800"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export { SidebarButton };
