import ExtraSurvice from './ExtraSurvice'
import Landing from "./Landing";
import RoomCheckout from "./RoomCheckout";
import OurRooms from "./OurRooms";
import VideoArea from "./VideoArea";
import HomeBlog from "./HomeBlog";
import FeatureSection from './FeatureSection'
import SecondLanding from './SecondLanding'

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
