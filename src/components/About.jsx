"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeUp } from "@/utils/motion";

export default function About() {
  return (
    <section
      id="tentang"
      className="relative bg-white px-4 py-24 sm:px-6 lg:px-10"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-2">

        {/* LEFT - IMAGE */}
        <motion.div
          className="relative mx-auto w-full max-w-md"
          {...fadeUp}
        >
          {/* Pink shape */}
          <div className="absolute -left-6 top-6 h-[95%] w-full rotate-[-4deg] rounded-3xl bg-[#F6DAD8]" />

          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <Image
              src="/image/abon_tentangkami.png"
              alt="Abon Ikan Moahi"
              width={800}
              height={1000}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Badge */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 rounded-xl bg-[#E2534A] px-6 py-3 text-sm font-semibold text-white shadow-lg">
            100% Halal
          </div>
        </motion.div>

        {/* RIGHT - TEXT */}
        <motion.div
          className="space-y-6"
          {...fadeUp}
        >
          <p className="text-sm font-semibold tracking-widest text-[#E2534A]">
            TENTANG KAMI
          </p>

          <h2 className="font-serif text-4xl font-extrabold leading-tight text-black sm:text-5xl">
            Mengolah dengan Cinta, <br />
            <span className="text-[#E2534A]">
              Menyajikan dengan Kualitas.
            </span>
          </h2>

          <div className="space-y-4 text-base leading-relaxed text-[#444]">
            <p>
              Momfood adalah UMKM Sorowako yang berdiri sejak 2019 dan
              memproduksi Abon Ikan Moahi dari ikan marlin pilihan yang
              higienis, bergizi, dan tanpa bahan pengawet.
            </p>

            <p>
              Berawal dari kebutuhan masyarakat akan makanan praktis,
              Momfood menghadirkan solusi sarapan dan lauk cepat saji
              yang lezat dan aman untuk semua usia.
            </p>

            <p>
              Lebih dari 10.000 bungkus telah terjual, produk telah lulus
              BPOM, ramah lingkungan, dan turut memberdayakan ibu-ibu
              rumah tangga lokal.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
