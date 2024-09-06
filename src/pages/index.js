
import React, { useState } from "react";
import '../styles/globals.css'
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import SideBar from "@/layout/SideBar";


export default function BasicDemo() {

  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <section className="homePage">
        <Header isActive={isOpen} setIsActive={setIsOpen} />
        <SideBar isActive={isOpen} setIsActive={setIsOpen} />
        <Footer />
      </section>
    </>
  )
}
