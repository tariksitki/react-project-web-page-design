import React from "react";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import SectionMiddle from "../../components/sectionMiddle/SectionMiddle";

import {
  AboutMainContainer,
  AboutMainContainerLeft,
  AboutMainContainerRight,
} from "./AboutStyles";

const About = () => {
  return (
    <>
      <Navbar />
      <SectionMiddle />

      <AboutMainContainer>
        <AboutMainContainerLeft>
          <h2>About Us</h2>
          <p className="about_main_left_p1">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam
            porro rerum eligendi neque magni, voluptates voluptate praesentium
            minima? Repellendus natus quod amet aliquam voluptatem molestiae
            maxime necessitatibus repudiandae. Fuga est repellendus, nam ad vel
            iusto unde tempora quam quibusdam deleniti quo sapiente quos
            adipisci sint magni fugiat assumenda, itaque natus.{" "}
          </p>

          <p className="about_main_left_p2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
            corrupti obcaecati temporibus. Obcaecati nisi saepe natus excepturi
            soluta fugiat illum adipisci voluptate non ullam, qui consectetur,
            amet numquam repellat quis, doloremque atque. Voluptatem dignissimos
            quis, nisi accusantium a inventore, consequuntur vero omnis enim
            voluptatum placeat at architecto assumenda error id nam eligendi ut
            reiciendis aliquid. Voluptas molestiae maiores, laboriosam
            voluptatibus, culpa iure, vero quaerat voluptates pariatur iusto
            neque rem magni qui! Maxime inventore blanditiis tempora odio minima
            iure dolorum accusamus, perspiciatis quam recusandae quod esse eius
            obcaecati sit ullam at labore! Repellat aspernatur eveniet nemo
            eligendi architecto, ad magni itaque.{" "}
          </p>
        </AboutMainContainerLeft>

        <AboutMainContainerRight>
          <h2>What We Do</h2>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur excepturi officiis quam perferendis aliquid aspernatur.
            Dicta ipsum reprehenderit corporis nobis modi hic qui maiores culpa,
            voluptatibus harum quia enim nostrum earum temporibus recusandae
            doloremque repudiandae eligendi perspiciatis velit animi tempore
            dignissimos optio. Temporibus eveniet suscipit beatae aut asperiores
            aliquid dicta.{" "}
          </p>
        </AboutMainContainerRight>
      </AboutMainContainer>
      <Footer />
    </>
  );
};

export default About;
