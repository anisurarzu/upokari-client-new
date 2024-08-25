import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Product from "@/components/Product/Product";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      {/* <Product /> */}
    </main>
  );
}
