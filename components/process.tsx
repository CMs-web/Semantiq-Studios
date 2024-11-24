"use client";

import { motion, useInView } from "framer-motion";
import { Search, Palette, Code, Rocket } from "lucide-react";
import { useRef } from "react";

const steps = [
  {
    icon: Search,
    title: "Discovery",
    description:
      "We dive deep into understanding your business goals, target audience, and project requirements.",
  },
  {
    icon: Palette,
    title: "Design",
    description:
      "Our designers create beautiful, intuitive interfaces that align with your brand identity.",
  },
  {
    icon: Code,
    title: "Development",
    description:
      "We build your project using modern technologies and best practices for optimal performance.",
  },
  {
    icon: Rocket,
    title: "Launch",
    description:
      "After thorough testing, we deploy your project and provide ongoing support.",
  },
];

export function Process() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="process"
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
              Our Process
            </h2>
          </motion.div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            We follow a structured approach to ensure the success of every project.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
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
                <motion.div
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  className="relative z-10 mb-6"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:from-white/20 group-hover:to-white/10 transition-all duration-500">
                    <step.icon className="w-8 h-8 text-white/80" />
                  </div>
                </motion.div>

                <h3 className="text-xl font-semibold mb-4 relative z-10 group-hover:text-white transition-colors">
                  {step.title}
                </h3>

                <p className="text-muted-foreground group-hover:text-white/80 transition-colors relative z-10">
                  {step.description}
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