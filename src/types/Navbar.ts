
export interface NavLinkProps {
    name: string;
    href: string;
    className?: string;
    itemKey: number | string;
    onClick?: () => void;
  }