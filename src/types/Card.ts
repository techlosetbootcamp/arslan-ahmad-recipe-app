export interface CardProps {
  type?: "vertical" | "horizontal";
  imageSrc: string;
  head: string;
  text: string;
  buttonText?: string;
  buttonLink: string;
}

export interface CardButtonProps {
  text: string;
  to: string;
}
