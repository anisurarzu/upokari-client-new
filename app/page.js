import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import BookList from "@/components/Product/BookList";
import Product from "@/components/Product/Product";
// import hindSiliguri from "@/styles/fonts";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <BookList />

      {/* <Product /> */}
    </main>
  );
}
