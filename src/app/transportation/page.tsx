import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import DogsHeader from "@components/PageHeader";
import Transportation from "@components/Transportation";

export const metadata: Metadata = {
  title: "Transportation",
  description: "Transportation page of Taniti Island",
};

export default function Home() {
  return (
    <>
      <DogsHeader />
      <Transportation />
      <Footer />
    </>
  );
}
