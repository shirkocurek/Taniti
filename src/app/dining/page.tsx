import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import DogsHeader from "@components/PageHeader";
import Dining from "@components/Dining";

export const metadata: Metadata = {
  title: "Dining",
  description: "Dining page of Taniti Island",
};

export default function Home() {
  return (
    <>
      <DogsHeader />
      <Dining />
      <Footer />
    </>
  );
}
