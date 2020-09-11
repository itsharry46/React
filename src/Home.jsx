import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/home.jpg"
import Common from "./Common"
const Home = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <Common name="Grow your Business" imgsrc={web} visit='/service' btname="Get Started" />
      </section>
    </>
  );
};

export default Home;