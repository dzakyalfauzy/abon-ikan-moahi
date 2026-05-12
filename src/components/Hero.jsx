"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { buttonHover, fadeUp } from "@/utils/motion";

const whatsappLink = "https://wa.me/6285828146411";

const highlights = [
  { icon: "🛡️", label: "Tanpa Bahan Pengawet" },
  { icon: "🏅", label: "UMKM Sorowako" },
  { icon: "🌶️", label: "Rasa Otentik" },
];

export default function Hero() {
  return (
    <motion.section
      id="beranda"
      className="relative overflow-hidden bg-gradient-to-b from-[#fdfdfd] via-[#fcfcfc] to-white px-4 pb-16 pt-24 sm:px-6 lg:px-10"
      {...fadeUp}
      viewport={{ once: true, amount: 0.25 }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-10 -top-16 h-60 w-60 rounded-full bg-[#f6dad8]/60 blur-3xl" />
        <div className="absolute bottom-[-14%] right-[-6%] h-72 w-72 rounded-full bg-[#f6dad8]/45 blur-3xl" />
      </div>

      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Text side */}
        <div className="space-y-8">
          <motion.div
            className="inline-flex items-center gap-2 rounded-full bg-[#F6DAD8] px-5 py-2 text-sm font-semibold text-[#b44a45] shadow-sm"
            {...fadeUp}
            viewport={{ once: true }}
          >
            <span className="text-lg">🍃</span>
            <span>Oleh-Oleh Luwu Timur</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              className="font-serif text-5xl font-extrabold text-black sm:text-6xl"
              {...fadeUp}
              viewport={{ once: true }}
            >
              Abon Ikan Moahi
            </motion.h1>
            <motion.h2
              className="font-serif text-5xl font-extrabold text-[#E2534A] sm:text-6xl"
              {...fadeUp}
              viewport={{ once: true }}
              transition={{ duration: 0.65, ease: "easeOut", delay: 0.05 }}
            >
              Gurih dan Lezat
            </motion.h2>
          </div>

          <motion.p
            className="max-w-2xl text-lg leading-relaxed text-[#555]"
            {...fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
          >
            Oleh-oleh khas Luwu Timur, dibuat dari ikan segar pilihan tanpa bahan
            pengawet. Resep rumahan yang terjaga kualitasnya.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-6"
            {...fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.15 }}
          >
            <motion.a
              href={whatsappLink}
              className="flex items-center gap-3 rounded-full bg-[#8EF6A0] px-6 py-3 text-base font-semibold text-[#1d1c1c] shadow-md shadow-[#8EF6A0]/40 transition hover:bg-[#79e08b]"
              {...buttonHover}
            >
              <span className="text-xl">💬</span>
              Pesan Sekarang
            </motion.a>
            <motion.a
              href="#produk"
              className="flex items-center gap-2 rounded-full border border-[#f1aaa3] px-6 py-3 text-base font-semibold text-[#d1645a] transition hover:bg-[#f6dad8]/50"
              {...buttonHover}
            >
              Lihat Produk
            </motion.a>
          </motion.div>

          <motion.div
            className="flex flex-wrap items-center gap-3"
            {...fadeUp}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
          >
            {highlights.map((item) => (
              <div
                key={item.label}
                className="flex items-center gap-2 rounded-full bg-[#F8E8E7] px-4 py-2 text-sm font-medium text-[#5b4d4b] shadow-sm"
              >
                <span className="text-base">{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Image side */}
        <motion.div
          className="relative mx-auto w-full max-w-xl"
          {...fadeUp}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
        >
          {/* Decorative pink shapes */}
         {/* BIG pink background block */}
        <div className="absolute -left-1 top0 h-[105%] w-[105%] -rotate-4 rounded-[3rem] bg-[#f6dad8]" />


          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_25px_60px_-25px_rgba(0,0,0,0.25)] ring-1 ring-[#f0f0f0]">
            <Image
              src="/image/abon_beranda.png"
              alt="Abon Ikan Moahi"
              width={1400}
              height={900}
              className="h-full w-full object-cover"
              priority
            />
            <div className="absolute left-4 bottom-4 rounded-2xl bg-white/90 px-4 py-3 text-xs font-semibold text-[#d1645a] shadow-sm">
              Produk 100% Asli
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

