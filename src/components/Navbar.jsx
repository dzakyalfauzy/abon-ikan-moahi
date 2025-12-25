"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { buttonHover } from "@/utils/motion";
import Image from "next/image";


const navItems = [
  { label: "Beranda", href: "#beranda" },
  { label: "Tentang", href: "#tentang" },
  { label: "Produk", href: "#produk" },
  { label: "Pemesanan", href: "#pemesanan" },
  { label: "Lokasi", href: "#lokasi" },
];

const whatsappLink = "https://wa.me/6285242067298";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 shadow-sm backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 lg:px-6">
      <Link href="#beranda" className="flex items-center">
  <Image
    src="/image/header_momfood.png"
    alt="Moahi Momfood"
    width={140}
    height={40}
    priority
    className="h-9 w-auto object-contain transition hover:scale-[1.02]"
  />
</Link>


        <div className="hidden items-center gap-6 text-sm font-medium text-neutral-800 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#C7372D]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <motion.a
          href={whatsappLink}
          className="rounded-full bg-[#8EF6A0] px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:shadow-lg"
          {...buttonHover}
        >
          Pesan Sekarang
        </motion.a>
      </div>

      <div className="flex items-center gap-3 overflow-x-auto px-4 pb-3 text-xs font-medium text-neutral-700 md:hidden">
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            className="whitespace-nowrap rounded-full bg-white/70 px-3 py-2 shadow-sm ring-1 ring-neutral-100 transition hover:text-[#C7372D]"
          >
            {item.label}
          </a>
        ))}
      </div>
    </motion.nav>
  );
}

