import Footer from "@components/Footer";
import { Metadata } from "next";
import React from "react";
import Header from "@components/Header";
import Hero from "@components/Hero";
import Dogs from "@components/Dogs";
import DogsHeader from "@components/DogsHeader";

export const metadata: Metadata = {
  title: "Dogs",
  description: "Dogs page of the Accelerator IPP",
};

export default function Home() {
  return (
    <>
      <DogsHeader />
      <Dogs />
      <Footer />
    </>
  );
}
