
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({title, subtitle}) => {
  return (
    <>
      <h2 className="text-[32px] md:text-[38.9px] leading-[47.07px] my-10 font-[700] text-gray-800">
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && <p className="text-lg text-gray-600 mt-2">{subtitle}</p>}
    </>
  )
}

export default SectionHeader
