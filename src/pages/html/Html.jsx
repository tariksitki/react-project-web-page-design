import React from "react";
import BackIcon from "../../components/backIcon/BackIcon";
import Footer from "../../components/footer/Footer";
import Navbar from "../../components/navbar/Navbar";
import { HtmlMain, HtmlMainDown, HtmlMainUp } from "./HtmlStyles";
import image from "../../assets/img/logo_html.png";

const Html = () => {
  return (
    <>
      <Navbar />
      <BackIcon />
      <HtmlMain>
        <HtmlMainUp>
          <img src={image} alt="" />
        </HtmlMainUp>

        <HtmlMainDown>
          <h1> HTML 5 </h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab,
            voluptatibus iure doloribus cum obcaecati, esse perferendis nesciunt
            exercitationem maiores nihil quibusdam nobis sequi dolores maxime
            facilis qui quia nam nostrum magni, odio quis? Alias ipsam
            consectetur ex laudantium reprehenderit nostrum itaque vel velit, et
            sint fuga quis possimus eaque deleniti assumenda id illo culpa enim
            quisquam dolores necessitatibus accusamus numquam repudiandae.
            Aspernatur obcaecati maiores cupiditate atque repellendus fugit sit
            porro officia quod similique corporis sint quibusdam odit quo totam,
            nihil, beatae dolor temporibus, a iste voluptates perferendis magni
            voluptatum nulla. Facilis, et nesciunt commodi aliquam officiis
            maxime voluptatum fugit architecto?{" "}
          </p>
        </HtmlMainDown>
      </HtmlMain>
      <Footer />
    </>
  );
};

export default Html;
