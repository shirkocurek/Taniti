import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Dogs from "@components/Dogs";
import DogsHeader from "@components/DogsHeader";
import Birds from "@components/Birds";
import About from "@components/About";

export const metadata: Metadata = {
  title: "About",
  description: "About page of the Accelerator IPP",
};

export default function Home() {
  return (
    <>
      <DogsHeader />
      <About />
      <Footer />
    </>
  );
}
