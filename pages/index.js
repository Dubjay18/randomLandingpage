import { AnimatePresence, AnimateSharedLayout, motion } from "framer-motion";
import Head from "next/head";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Loader from "../components/Loader";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div
      data-theme={"lemonade"}
      className={"  overflow-x-hidden bg-base-100 h-screen"}
    >
      <Head>
        <title>Dev-Jay</title>
        <link rel="icon" href="/favicon.ico" sizes="16x16 32x32" />
        <link
          href="https://fonts.googleapis.com/css?family=Poppins"
          rel="stylesheet"
        />
      </Head>
      {loading ? (
        <Loader />
      ) : (
        <AnimatePresence>
          <PageTransition>
            <div className="min-h-screen h-fit bg-base-100 font-poppins overflow-y-hidden overflow-x-hidden">
              <Navbar />
              <Hero />
              <Footer />
            </div>
          </PageTransition>
        </AnimatePresence>
      )}
    </div>
  );
}
