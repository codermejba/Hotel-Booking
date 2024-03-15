
import NavigationBar from "./NavigationBar";
import ExtraSurvice from './HomePage/ExtraSurvice'

import Landing from "./HomePage/Landing";
import Accomodation from "./HomePage/Accomodation";
import RoomCheckout from "./HomePage/RoomCheckout";
import OurRooms from "./HomePage/OurRooms";
import VideoArea from "./HomePage/VideoArea";
import HomeBlog from "./HomePage/HomeBlog";
import FeatureSection from './HomePage/FeatureSection'

const HomePage = () => {
  return (
    <>
      <Landing />
      <RoomCheckout />
     <Accomodation/>
      <OurRooms />
      <VideoArea />
       <ExtraSurvice />
     <FeatureSection /> 
       <HomeBlog />
    </>
  );
};

export default HomePage;
