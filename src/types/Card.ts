export type CardProps = {
  type?: "vertical" | "horizontal";
  imageSrc: string;
  head: string;
  text: string;
  buttonText?: string;
  buttonLink: string;
};

export type CardButtonProps = {
  text: string;
  to: string;
};
