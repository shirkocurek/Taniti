import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import About from "@components/About";
import PageHeader from "@components/PageHeader";

export const metadata: Metadata = {
  title: "About",
  description: "About page of the Accelerator IPP",
};

export default function Home() {
  return (
    <>
      <PageHeader />
      <About />
      <Footer />
    </>
  );
}
