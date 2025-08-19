import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import DogsHeader from "@components/PageHeader";
import Attractions from "@components/Attractions";

export const metadata: Metadata = {
  title: "Attractions",
  description: "Attractions page of Taniti Island",
};

export default function Home() {
  return (
    <>
      <DogsHeader />
      <Attractions />
      <Footer />
    </>
  );
}
