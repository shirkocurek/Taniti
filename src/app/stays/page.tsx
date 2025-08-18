import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Dogs from "@components/Stays";
import DogsHeader from "@components/PageHeader";
import Stays from "@components/Stays";

export const metadata: Metadata = {
  title: "Stays",
  description: "Stays page of the Accelerator IPP",
};

export default function Home() {
  return (
    <>
      <DogsHeader />
      <Stays />
      <Footer />
    </>
  );
}
