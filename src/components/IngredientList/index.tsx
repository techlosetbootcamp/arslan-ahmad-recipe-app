import SingleListHeader from "./SectionHeader";

interface Recipe {
  instructions: Array<{
    display_text: string;
  }>;
}

const ContentList = ({
  arr,
  type,
  heading,
}: {
  arr: Recipe;
  type: "ul" | "ol";
  heading: string;
}) => {
  const content = arr.instructions.map((step, index) => (
    <li key={index}>{step.display_text}</li>
  ));
  return (
    <>
      <SingleListHeader text={heading} />
      {type === "ul" ? (
        <ul className="list-disc list-outside pl-4">{content}</ul>
      ) : (
        <ol className="list-decimal list-outside pl-4">{content}</ol>
      )}
    </>
  );
};

export default ContentList;
