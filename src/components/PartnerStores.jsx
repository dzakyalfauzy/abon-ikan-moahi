"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight } from "@/utils/motion";

const stores = [
  {
    name: "Toko Oleh-Oleh Danau Matano",
    area: "Sorowako",
  },
  {
    name: "Toko Sorowako / Wawondula / Wasuponda",
    area: "Lutim & Sekitarnya",
  },
  {
    name: "Koperasi PT Vale",
    area: "Area Perusahaan",
  },
];

export default function PartnerStores() {
  return (
    <motion.section
      id="mitra"
      className="bg-white py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:px-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7372D]">
            Toko Mitra
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">Tempat Membeli</h2>
          <p className="text-base text-neutral-600">
            Dapatkan Abon Ikan Moahi di lokasi mitra berikut.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stores.map((store, idx) => (
            <motion.div
              key={store.name}
              className="rounded-2xl bg-gradient-to-br from-white to-[#f8f8f8] p-6 shadow-sm ring-1 ring-neutral-100"
              {...(idx % 2 === 0 ? fadeLeft : fadeRight)}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6, scale: 1.01 }}
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#C7372D]/10 text-sm font-semibold text-[#C7372D]">
                {idx + 1}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-neutral-900">
                {store.name}
              </h3>
              <p className="mt-2 text-sm text-neutral-600">{store.area}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}

