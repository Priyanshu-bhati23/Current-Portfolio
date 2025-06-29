"use client"
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

import { serviceData } from '@/assets/assets'
import { assets, infoList, toolsData } from '@/assets/assets'
import React,{useState,useRef, useEffect} from 'react'
import Image from 'next/image'

export default function Home() {

 
  return (
    <>
    <Navbar/>
    <Header />
    <About />
    <Services />
    <Work />
    <Contact />
    <Footer />
    </>
  );
}
