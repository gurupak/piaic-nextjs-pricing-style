"use client";
import styles from "./page.module.css";
import { Header } from "@/components/Header";
import { Pricing } from "@/components/Pricing";
import { Features } from "@/components/Features";

export default function Home() {
  return (
    <>
      <div className="App">
        <Header />
        <Pricing />
        <Features />
      </div>
    </>
  );
}
