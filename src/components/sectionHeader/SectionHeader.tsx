import { SectionHeaderProps } from "../../types/SectionHeader";

const SectionHeader: React.FC<SectionHeaderProps> = ({ title, alignment }) => {
  return (
    <>
      <h2
        className={`text-[32px] ${
          alignment == "left" &&
          "text-center min-[1024px]:text-left min-[1024px]:ml-28 min-[1281px]:ml-10 min-[1535px]:ml-40"
        } md:text-[38.9px] leading-[47.07px] my-10 font-[700] text-gray-800`}
      >
        {title}
      </h2>
    </>
  );
};

export default SectionHeader;
