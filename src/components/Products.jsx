"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { buttonHover, fadeUpItem, staggerContainer } from "@/utils/motion";
import { fadeUp } from "../utils/motion";


const whatsappLink = "https://wa.me/6285828146411";

const products = [
  {
    name: "Abon Ikan Moahi",
    desc: "Tekstur lembut, rasa gurih seimbang, cocok untuk lauk, topping, atau camilan.",
    img: "/image/abon_produk1.png",
  },
  {
    name: "Abon Ikan Moahi",
    desc: "Racikan rempah otentik khas Sorowako dengan bahan ikan marlin pilihan.",
    img: "/image/abon_produk2.png",
  },
];

export default function Products() {
  return (
    <motion.section
      id="produk"
      className="bg-white py-16"
      {...fadeUp}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:px-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7372D]">
            Produk Kami
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">
            Dibuat dengan bahan pilihan
          </h2>
          <p className="text-base text-neutral-600">
            Proses higienis untuk menghasilkan abon berkualitas terbaik.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 gap-6 md:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
        >
          {products.map((product, idx) => (
            <motion.div
              key={product.name}
              variants={fadeUpItem}
              whileHover={{ rotate: idx % 2 === 0 ? -1.5 : 1.5, y: -6 }}
              className="group overflow-hidden rounded-3xl bg-gradient-to-br from-white to-[#f8f8f8] shadow-lg ring-1 ring-neutral-100"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={product.img}
                  alt={product.name}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="space-y-3 p-6">
                <h3 className="text-xl font-semibold text-neutral-900">
                  {product.name}
                </h3>
                <p className="text-sm leading-relaxed text-neutral-600">
                  {product.desc}
                </p>
                <motion.a
                  href={whatsappLink}
                  className="inline-block rounded-full bg-[#8EF6A0] px-5 py-2 text-sm font-semibold text-white shadow-md"
                  {...buttonHover}
                >
                  Pesan Sekarang
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}


