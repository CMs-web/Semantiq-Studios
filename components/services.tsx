"use client";

import { motion, useInView } from "framer-motion";
import { Code, Palette, Globe, Lightbulb } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Create intuitive and engaging user experiences that delight your customers and drive conversions.",
  },
  {
    icon: Code,
    title: "Web Development",
    description:
      "Build fast, responsive, and scalable web applications using cutting-edge technologies.",
  },
  {
    icon: Globe,
    title: "Digital Branding",
    description:
      "Develop a strong online presence that reflects your brand's values and resonates with your audience.",
  },
  {
    icon: Lightbulb,
    title: "Digital Strategy",
    description:
      "Create comprehensive digital strategies that align with your business goals and drive growth.",
  },
];

export function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="services"
      className="py-32 relative overflow-hidden bg-black"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Services
            </h2>
          </motion.div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We offer a comprehensive suite of digital services to help your
            business thrive in the digital age.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: 0.2 + index * 0.1,
                type: "spring",
                stiffness: 100,
              }}
            >
              <motion.div
                whileHover={{ y: -10 }}
                className="p-8 rounded-2xl card-gradient border border-white/5 h-full group cursor-pointer relative"
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "linear-gradient(45deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))",
                  }}
                />

                <motion.div
                  initial={{ rotate: 0 }}
                  whileHover={{ rotate: 360, scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  className="mb-6 relative z-10"
                >
                  <service.icon className="w-12 h-12 text-white/80" />
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 relative z-10 group-hover:text-white transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-white/80 transition-colors relative z-10">
                  {service.description}
                </p>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      "radial-gradient(circle at center, rgba(255,255,255,0.05), transparent)",
                  }}
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}