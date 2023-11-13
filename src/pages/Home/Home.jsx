import AsianCountries from "./AsianCountries";
import Countries from "./Countries";
import FeBanner from "./FeBanner";
import Hero from "./Hero";
import TravelTips from "./TravelTips";

const Home = () => {
  return (
    <div>
      <Hero />
      <Countries />
      <FeBanner />
      <AsianCountries />
      <TravelTips />
    </div>
  );
};

export default Home;
