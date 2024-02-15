import { Container } from "postcss";
import React from "react";
import { Button } from "@mui/material";

import Hero from "@/components/Hero";
import Services from "@/components/services";

import Timeliness from "@/components/Timeline";
import Whatwedo from "@/components/Whatwedo";
const Home = () => {
  return (
    <>
      <Hero />
      <Whatwedo />
      <Services />
      <Timeliness />
    </>
  );
};

export default Home;