import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Dogs from "@components/Dogs";
import DogsHeader from "@components/DogsHeader";
import Cats from "@components/Cats";
import Contact from "@components/Contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page of the Accelerator IPP",
};

export default function Home() {
  return (
    <>
      <DogsHeader />
      <Contact />
      <Footer />
    </>
  );
}
