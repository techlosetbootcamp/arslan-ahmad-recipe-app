export interface SectionContainerProps {
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  children?: React.ReactNode;
}
