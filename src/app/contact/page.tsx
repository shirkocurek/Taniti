import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import Contact from "@components/Contact";
import PageHeader from "@components/PageHeader";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact page of Taniti Island",
};

export default function Home() {
  return (
    <>
      <PageHeader />
      <Contact />
      <Footer />
    </>
  );
}
