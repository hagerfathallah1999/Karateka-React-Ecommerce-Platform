import HomeSecOneSlides from "../Sections/HomeSections/HomeSecOneSlides";
import HomeWKFSection from "../Sections/HomeSections/HomeWKFSection";
import HomeSecTwoInfo from "../Sections/HomeSections/HomeSecTwoInfo";
import HomeSecThreeProducts from "../Sections/HomeSections/HomeSecThreeProducts";

export default function Home() {
  return (
    <div className="w-screen">
      <HomeSecOneSlides />
      {/* <HomeWKFSection /> */}
      <HomeSecTwoInfo />
      <HomeSecThreeProducts />
    </div>
  );
}
