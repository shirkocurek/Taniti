import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import Header from "@components/Header";
import Hero from "@components/Hero";

export const metadata: Metadata = {
  title: "Home",
  description: "Home page of the Accelerator IPP",
};

export default function Home() {
  return (
    <>
      <Header />
      {/* <Hero/> */}
      <Footer />
    </>
  );
}
