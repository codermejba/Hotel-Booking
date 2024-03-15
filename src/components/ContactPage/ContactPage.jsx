import styled from "styled-components";
import NavigationBar from "../NavigationBar";
import ContactName from "../../../public/icon/ContactIcon";
import MailIcon from "../../../public/icon/MailIcon";
import Callicon from "../../../public/icon/Callicon";
import Subjecticon from "../../../public/icon/Subjecticon";
import Commentsicon from "../../../public/icon/Commentsicon";
import { ReadButton } from "../../assets/styled/ReadButton";
import RightArrow from "../../../public/icon/RightArrow";
import Information from "../Information";
import SocialLinkIcons from "../SocialLinkIcons";
const ContactPage = () => {
  return (
    <Main >
      <TopSection className="  position-relative ">
        <div className="contactBgImg position-absolute top-0 h-100 w-100 "></div>
        <div className="container d-flex flex-column align-items-center justify-content-center h-100">
          <h2 className="text-center">Contact Us</h2>

          <div>
            <a href="#">Home</a> - <span>Contact Us</span>
          </div>
        </div>
      </TopSection>
      <div className="container">
        <ContactSection className="container row">
          <InformationSec className="col-lg-6 px-lg-4">
            <h2>Get In Touch</h2>
            
            <div className="py-2">
            <p>
              Phasellus nisi sapien, rutrum placerat sapien eu, rhoncus tempus
              felis. Nulla non pulvinar enim, vel viverra nunc
            </p>

            <div className="py-4">

             <Information/>
            </div>
            </div>
          <SocialLinkIcons/>
          </InformationSec>
          <MassageForm className="col-lg-6">
            <h2>send Massage</h2>
            <form>
              <div className="row g-lg-4">
                <div className=" col-md-6 position-relative">
                  <div className="icon py-2 position-absolute top-0 h-100 ">
                    <ContactName />
                  </div>
                  <input type="text" placeholder="Full Name" name="name" />
                </div>
                <div className="col-md-6 position-relative">
                  <div className="py-2 position-absolute top-0 h-100 icon">
                    <MailIcon />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                  />
                </div>
              </div>
              <div className="row  g-lg-4">
                <div className=" col-md-6 position-relative">
                  <div className="icon py-4 position-absolute top-0 h-100 ">
                    <Callicon />
                  </div>
                  <input type="text" placeholder="Phone Number" name="phone" />
                </div>
                <div className="col-md-6 position-relative">
                  <div className="py-2 position-absolute top-0 h-100 icon">
                    <Subjecticon />
                  </div>
                  <input type="text" placeholder="Subjects" name="subject" />
                </div>
                <div className="col-md-12 m-0 position-relative">
                  <div className="py-4 position-absolute top-0 h-100 ">
                    <Commentsicon />
                  </div>
                  <textarea
                    name=""
                    id=""
                    className="my-md-2 my-md-3"
                    cols="30"
                    rows="10"
                  ></textarea>
                </div>
                <div className="submitButton col-12 mt-2">
                  <ReadButton className="m-0">
                    submit now
                   <RightArrow/>
                  </ReadButton>
                </div>
              </div>
            </form>
          </MassageForm>
        </ContactSection>
      </div>

    </Main>
  );
};

const Main = styled.div`
 h2 {
    text-transform: capitalize;
  }
`;
const TopSection = styled.div`
  height: 75vh;
  background: var(--contact-bg-color);

  .contactBgImg {
    background: url("img/Rooms/Family Room.jpg") center center/cover;
    z-index: -1;
  }

  h2 {
    color: white;
    font-size: 3em;
  }

  a {
    color: white;
    transition: color 0.5s;
    &:hover {
      color: var(--primary-color);
    }
  }

  span {
    color: var(--primary-color);
    font-weight: 600;
  }
`;

const ContactSection = styled.div`
padding: 120px 0;
  
`;
const InformationSec = styled.div`
 
  .cardItem p{
    margin-left: 8px;
  }
  .cardBody :nth-child(1) p{
    margin-left: 0px;
  }
`;
const MassageForm = styled.div`
  //background: yellow;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #Commentsicon {
    height: 15px;
    margin-left: 10px;
    path {
      fill: var(--primary-color);
    }
  }
  svg {
    height: 20px;
    margin-left: 5px;
    path {
      fill: var(--primary-color);
    }
  }
  textarea,
  textarea:focus,
  input,
  input:focus {
    background: none;
    border: 1px solid var(--primary-color);
    outline: none;
    box-shadow: none;
  }

  input,
  textarea {
    border: 1px solid var(--body-color);
    width: 100%;
    padding: 10px 10px 10px 40px;
    font-size: 14px;
    margin: 15px 0;
  }
  textarea {
    padding-top: 22px;
  }
  .submitButton{
    svg path{
      fill:white;
    }
  }
`;
export default ContactPage;
