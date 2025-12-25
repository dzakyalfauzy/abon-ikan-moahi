"use client";

import { motion } from "framer-motion";
import { fadeUp, fadeUpItem, staggerContainer } from "@/utils/motion";

const featureList = [
  {
    title: "Tanpa Pengawet",
    desc: "Dimasak fresh, higienis, dan dikeringkan sempurna sehingga awet secara alami.",
    icon: "🛡️",
  },
  {
    title: "UMKM Sorowako",
    desc: "Memberdayakan ibu-ibu rumah tangga lokal dengan standar produksi modern.",
    icon: "🤲",
  },
  {
    title: "Rasa Otentik",
    desc: "Racikan rempah khas Sulawesi dengan tekstur lembut yang disukai semua usia.",
    icon: "✨",
  },
];

export default function Features() {
  return (
    <motion.section
      className="bg-white py-16"
      {...fadeUp}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:px-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7372D]">
            Keunggulan
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">Kenapa Moahi?</h2>
          <p className="text-base text-neutral-600">
            Abon ikan marlin lembut dengan standar kualitas terbaik dari Momfood.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {featureList.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUpItem}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-[#f8f8f8] p-6 shadow-sm ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#C7372D]/5 via-transparent to-[#9A4A2A]/5 opacity-0 transition duration-300 group-hover:opacity-100" />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-[#C7372D]/10 text-lg">
                {item.icon}
              </div>
              <h3 className="relative mt-4 text-lg font-semibold text-neutral-900">
                {item.title}
              </h3>
              <p className="relative mt-2 text-sm leading-relaxed text-neutral-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

