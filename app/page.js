"use client";
import BlogList from "@/Components/BlogList";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import CommentSection from "@/Components/Form";


export default function Home() {
  return (
    <>
      <Header />
      <BlogList />
      <CommentSection />
      <Footer />
    </>
  );
}
