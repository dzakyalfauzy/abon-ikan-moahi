"use client";

import { motion } from "framer-motion";
import { buttonHover, fadeUp } from "@/utils/motion";

const whatsappLink = "https://wa.me/6285242067298";

export default function Harga() {
  return (
    <motion.section
      id="harga"
      className="bg-[#F8F8F8] py-16"
      {...fadeUp}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 text-center lg:px-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7372D]">
            Harga
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">Kemasan 200g</h2>
        </div>

        <motion.div
          className="relative w-full max-w-xl overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-neutral-100"
          whileHover={{ scale: 1.02, y: -6 }}
          transition={{ duration: 0.3 }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#C7372D]/5 via-transparent to-[#9A4A2A]/8" />
          <div className="relative space-y-3">
            <p className="text-sm font-medium text-neutral-600">Abon Ikan Moahi</p>
            <h3 className="text-4xl font-semibold text-[#C7372D]">Rp 60.000</h3>
            <p className="text-sm text-neutral-600">
              Tekstur lembut, rasa gurih, cocok untuk lauk atau camilan sehat.
            </p>
            <motion.a
              href={whatsappLink}
              className="inline-block rounded-full bg-[#8EF6A0] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#C7372D]/20"
              {...buttonHover}
            >
              Pesan Sekarang
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

