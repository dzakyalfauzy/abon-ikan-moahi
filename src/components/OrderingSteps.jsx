"use client";

import { motion } from "framer-motion";
import { buttonHover, fadeUp, fadeUpItem, staggerContainer } from "@/utils/motion";

const whatsappLink = "https://wa.me/6285242067298";

const steps = [
  {
    title: "Hubungi via WhatsApp",
    desc: "Chat kami untuk konsultasi pesanan, ketersediaan stok, dan produk.",
  },
  {
    title: "Konfirmasi Pembayaran",
    desc: "Kirim bukti transfer, lalu pesanan langsung kami siapkan.",
  },
  {
    title: "Pengiriman",
    desc: "Dikirim ke lokasi Anda atau ambil di toko mitra terdekat.",
  },
];

export default function OrderingSteps() {
  return (
    <motion.section
      id="pemesanan"
      className="bg-[#F8F8F8] py-16"
      {...fadeUp}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-4 lg:px-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7372D]">
            Cara Pemesanan
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Mudah &amp; Cepat
          </h2>
          <p className="text-base text-neutral-600">
            Pesan Abon Ikan Moahi dengan mudah melalui WhatsApp atau kunjungi toko
            mitra kami.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-4 md:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              variants={fadeUpItem}
              className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-neutral-100 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="absolute left-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#C7372D]/10 text-sm font-semibold text-[#C7372D]">
                {idx + 1}
              </div>
              <div className="mt-10 space-y-2">
                <h3 className="text-lg font-semibold text-neutral-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="flex justify-center">
          <motion.a
            href={whatsappLink}
            className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-[#25D366]/30"
            {...buttonHover}
            animate={{ scale: [1, 1.02, 1] }}
            transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
          >
            Chat WhatsApp Sekarang
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
}

