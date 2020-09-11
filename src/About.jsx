import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/about.jpg"
import Common from "./Common"
const About = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <Common name="Welcome To About Page" imgsrc={web} visit='/contact' btname="Contact Now" />
      </section>
    </>
  );
};

export default About;