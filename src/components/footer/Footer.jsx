import { FooterMain } from "./FooterStyles";
import ClaruswayLogo from "../../assets/img/clarusway_logo.png";
import { useNavigate } from "react-router";



const Footer = () => {
  return (
    <FooterMain>
      <a href="https://clarusway.com/">
          <img src={ClaruswayLogo} alt="ClaruswayLogo" ></img>
      </a>
      <p>Clarusway Web Design, Copyright &copy; 2022 </p>
    </FooterMain>
  )
}

export default Footer