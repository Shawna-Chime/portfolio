import React from "react";
import Navbar from "../components/Navbar";

const About = () => {
  return (
    <div className="about">
      <Navbar />
      <div className="about-content">
        <h2>ABOUT ME</h2>
        <p>
          My name is Shawna Chime-Age. I'm a multifaceted creative with a focus
          on graphic design, web development, and UI/UX design. With a strong
          foundation in both code and visual storytelling, I bring ideas to life
          through clean, functional, and aesthetically-driven digital
          experiences.
        </p>
        <br />
        <p>
          My passion for design and technology is rooted in a lifelong interest
          in art, media, and creative expression. Whether it's building
          user-friendly interfaces, crafting compelling visuals, or developing
          intuitive websites, I approach every project with curiosity,
          intention, and a deep respect for detail.
        </p>
        <br />
        <p>
          I thrive in environments that value collaboration, innovation, and
          purpose. Whether you're an agency, startup, or brand looking to bring
          bold ideas to life, I'm excited to help shape meaningful digital
          experiences.
        </p>
        <div className="contact">
          <h3>CONTACT</h3>
          <p>Email: shawnachime36@gmail.com</p>
          <p>Phone: +2347059879448</p>
        </div>
      </div>
    </div>
  );
};

export default About;
