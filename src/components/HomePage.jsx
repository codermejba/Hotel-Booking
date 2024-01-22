import ExtraSurvice from './HomePage/ExtraSurvice'
import Landing from "./HomePage/Landing";
import RoomCheckout from "./HomePage/RoomCheckout";
import OurRooms from "./HomePage/OurRooms";
import VideoArea from "./HomePage/VideoArea";
import HomeBlog from "./HomePage/HomeBlog";
import FeatureSection from './HomePage/FeatureSection'
import SecondLanding from './HomePage/SecondLanding'

const HomePage = () => {
  return (
    <>
      <Landing />
      <RoomCheckout />
      <SecondLanding/>
      <OurRooms />
      <VideoArea />
      <ExtraSurvice />
      <FeatureSection />
      <HomeBlog />
    </>
  );
};

export default HomePage;
