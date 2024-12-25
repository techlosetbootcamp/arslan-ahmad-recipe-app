import Banner from "../components/Banner";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";

const Home = () => {
  return (
    <>
      <Banner
        bannerImage="../src/assets/imgs/hero-banner-image.png"
        bannerText="Get Inspired, Cook with passion and enjoy unforgettable moments at the table"
      />
      <SectionContainer
        title="Recent Posts"
        className="grid-cols-1 lg:grid-cols-3"
      >
        <Card
          imageSrc="../src/assets/imgs/card-image.png"
          head="Waffels"
          text="These are the europian food that are mostly liked in breackfast alsong with tea."
          buttonLink="#"
        />
        <Card
          imageSrc="../src/assets/imgs/card-image.png"
          head="Waffels"
          text="These are the europian food that are mostly liked in breackfast alsong with tea."
          buttonLink="#"
        />
        <Card
          imageSrc="../src/assets/imgs/card-image.png"
          head="Waffels"
          text="These are the europian food that are mostly liked in breackfast alsong with tea."
          buttonLink="#"
        />
      </SectionContainer>
      <SectionContainer title="Popular Posts" className="grid-cols-1">
        <Card
          type="horizontal"
          imageSrc="../src/assets/imgs/horizontal-card.png"
          head="Waffels"
          text="These are the europian food that are mostly liked in breackfast alsong with tea."
          buttonLink="#"
        />
        <Card
          type="horizontal"
          imageSrc="../src/assets/imgs/horizontal-card.png"
          head="Waffels"
          text="These are the europian food that are mostly liked in breackfast alsong with tea."
          buttonLink="#"
        />
        <Card
          type="horizontal"
          imageSrc="../src/assets/imgs/horizontal-card.png"
          head="Waffels"
          text="These are the europian food that are mostly liked in breackfast alsong with tea."
          buttonLink="#"
        />
      </SectionContainer>
    </>
  );
};

export default Home;
