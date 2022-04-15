import { FooterMain } from "./FooterStyles";
import ClaruswayLogo from "../../assets/img/clarusway_logo.png";



const Footer = () => {
  
  return (
    <FooterMain>
      <img src={ClaruswayLogo} alt="ClaruswayLogo"></img>
      <p>Clarusway Web Design, Copyright &copy; 2022 </p>
    </FooterMain>
  )
}

export default Footer