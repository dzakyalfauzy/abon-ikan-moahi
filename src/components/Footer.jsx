"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/utils/motion";

export default function Footer() {
  return (
    <motion.footer
      className="bg-[#1D1C1C] py-10 text-white"
      {...fadeUp}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 lg:px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-lg font-semibold">Moahi · Momfood</p>
            <p className="text-sm text-neutral-300">
              Abon ikan marlin khas Sorowako dengan rasa gurih dan tekstur lembut.
            </p>
          </div>
          <div className="space-y-1 text-sm text-neutral-200">
            <p>WhatsApp: +62 852-4206-7298</p>
            <p>Email: moahi@momfood.id</p>
            <p>Operasional: Sen - Sab · 08.00 - 16.00 WITA</p>
          </div>
        </div>
        <div className="h-px bg-white/10" />
        <p className="text-xs text-neutral-400">
          © {new Date().getFullYear()} Moahi. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
}

