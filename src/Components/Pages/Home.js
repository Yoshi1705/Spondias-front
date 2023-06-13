import React from "react";
import Slider from "../inc/Slider/Slider";
import Vm from "./in/Vm/Vm";
import Aboutspond from "./in/AboutSpondias/Aboutspond";
import { Link } from "react-router-dom";
import It from "./in/It/It";

import Testimonials from "./in/Testimonials/Testimonials";
function Home() {
  return (
    <div>
      <Link to="/">
        <Slider />
        <Aboutspond />
        <Vm />
        <It/>
        <Testimonials />
      </Link>
    </div>
  );
}

export default Home;
