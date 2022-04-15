import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { HomeHeader, SectionMiddle, SectionDown } from "./HomeStyles";
import ShowcaseFoto from "../../assets/img/showcase.jpg";
import CardContainer from "../../components/card/Card";
import htmlFoto from "../../assets/img/logo_html.png";
import cssFoto from "../../assets/img/logo_css.png";
import graphicFoto from "../../assets/img/logo_brush.png";

const Home = () => {
  return (
    <React.Fragment>
      <Navbar />
      <HomeHeader ShowcaseFoto={ShowcaseFoto}>
        <h1>Professional Web Design</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci
          quaerat facilis perferendis accusantium pariatur? Vero debitis
          voluptate
        </p>
      </HomeHeader>
      <SectionMiddle>
        <div className="left">
          <h3>Subscribe To Our Newsletter</h3>
        </div>

        <div className="right">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Your E-Mail"
          />
          <button type="submit">Subscribe</button>
        </div>
      </SectionMiddle>

      <SectionDown>
        <CardContainer
          imageUrl={htmlFoto}
          title={"HTML5 Markup"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam magni, ad pariatur odit perferendis?"
          }
        />
        <CardContainer
          imageUrl={cssFoto}
          title={"CSS3 Styling"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam magni, ad pariatur odit perferendis?"
          }
        />
        <CardContainer
          imageUrl={graphicFoto}
          title={"Graphic Design"}
          text={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore numquam magni, ad pariatur odit perferendis?"
          }
        />
      </SectionDown>

      <Footer />
    </React.Fragment>
  );
};

export default Home;
