import Card from "../components/Card";
import SeachBar from "../components/SearchBar";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";

const Search = () => {
  return (
    <main className="container mx-auto px-4">
      <section className="h-[360px]  w-full flex flex-col items-center justify-center">
        <SectionHeader title="Search Recipes" />
        <SeachBar
          className="max-w-[758px] w-[80%] min-w-[334px] h-[64.17px] py-1 sm:py-2 px-6"
          icon="lg"
        />
      </section>
      <SectionContainer className="lg:grid-cols-3 text-left" title="Search Results">
        <Card
          imageSrc="../src/assets/imgs/card-image.png"
          head="Waffels"
          text="this is just to test card."
          buttonLink="#"
        />
        <Card
          imageSrc="../src/assets/imgs/card-image.png"
          head="Waffels"
          text="this is just to test card."
          buttonLink="#"
        />
        <Card
          imageSrc="../src/assets/imgs/card-image.png"
          head="Waffels"
          text="this is just to test card."
          buttonLink="#"
        />
      </SectionContainer>
    </main>
  );
};

export default Search;
