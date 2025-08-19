import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import DogsHeader from "@components/PageHeader";
import Booking from "@components/Booking";

export const metadata: Metadata = {
  title: "Booking",
  description: "Booking page of Taniti Island",
};

export default function Home() {
  return (
    <>
      <DogsHeader />
      <Booking/>
      <Footer />
    </>
  );
}
