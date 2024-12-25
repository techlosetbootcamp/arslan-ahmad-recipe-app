const SingleListHeader = ({
  text,
  align = "left",
}: {
  text: string;
  align?: "center" | "left" | "right";
}) => {
  const title =
    text.slice(0, 1).toUpperCase() + text.slice(1).toLocaleLowerCase();
  return (
    <>
      <h3
        className={`${
          align == "center" ? "text-center" : "text-left"
        } font-[700] text-[24px] mb-5 mt-2`}
      >
        {align == 'center' ? title : title + ':'}
      </h3>
    </>
  );
};

export default SingleListHeader;
