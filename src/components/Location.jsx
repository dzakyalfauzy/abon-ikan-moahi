"use client";

import { motion } from "framer-motion";
import { fadeUp, zoomFade } from "@/utils/motion";

const contact = [
  { label: "Alamat", value: "Jl. Agatis C/15 SUMASANG, Sorowako, Kec. Nuha, Kab. Luwu Timur" },
  { label: "WhatsApp", value: "+62 852-4206-7298" },
  { label: "Email", value: "moahi@momfood.id" },
  { label: "Jam Operasional", value: "Sen - Sab · 08.00 - 16.00 WITA" },
];

export default function Location() {
  return (
    <motion.section
      id="lokasi"
      className="bg-[#F8F8F8] py-16"
      {...fadeUp}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-4 lg:px-6">
        <div className="space-y-2 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#C7372D]">
            Lokasi Kami
          </p>
          <h2 className="text-3xl font-semibold text-neutral-900">Temukan Moahi</h2>
          <p className="text-base text-neutral-600">
            Kunjungi kami langsung di Sorowako atau hubungi untuk informasi lebih
            lanjut.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <motion.div
            className="overflow-hidden rounded-3xl shadow-lg ring-1 ring-neutral-100"
            variants={zoomFade}
            initial="initial"
            whileInView="whileInView"
            transition={zoomFade.transition}
            viewport={{ once: true, amount: 0.3 }}
          >
            <iframe
              title="Lokasi Moahi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3985.939185515839!2d121.3744901!3d-2.5267583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d90659f4a843a73%3A0x11a4e133174369e9!2sAbon%20MOAHI!5e0!3m2!1sen!2sid!4v1766140381937!5m2!1sen!2sid"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <div className="space-y-4 rounded-3xl bg-white p-6 shadow-sm ring-1 ring-neutral-100">
            {contact.map((item) => (
              <div
                key={item.label}
                className="flex flex-col rounded-2xl bg-[#F8F8F8] px-4 py-3"
              >
                <span className="text-xs font-semibold uppercase tracking-wide text-[#C7372D]">
                  {item.label}
                </span>
                <span className="text-sm text-neutral-800">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}

