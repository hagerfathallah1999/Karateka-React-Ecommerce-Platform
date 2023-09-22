import HomeSecOneSlides from "../Sections/HomeSections/HomeSecOneSlides";
import HomeSecTwoInfo from "../Sections/HomeSections/HomeSecTwoInfo";
import HomeSecThreeProducts from "../Sections/HomeSections/HomeSecThreeProducts";

export default function Home() {
  return (
    <div className="w-screen">
      <HomeSecOneSlides />
      <HomeSecTwoInfo />
      <HomeSecThreeProducts />
    </div>
  );
}
