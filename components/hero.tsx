"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, MousePointerClick, Sparkles, Zap } from "lucide-react";
import { Magnetic } from "./animations/magnetic";
import { FadeIn } from "./animations/fade-in";
import { TextReveal } from "./animations/text-reveal";
import { MagneticText } from "./animations/magnetic-text";
import { ParallaxText } from "./animations/parallax-text";
import { GradientCursor } from "./animations/gradient-cursor";
import { useRef } from "react";

export function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 300], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      ref={containerRef}
    >
      <GradientCursor />

      {/* Animated background gradient */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.2) 0%, var(--background) 50%)",
            "radial-gradient(circle at 60% 40%, hsl(var(--primary)/0.2) 0%, var(--background) 50%)",
            "radial-gradient(circle at 40% 60%, hsl(var(--primary)/0.2) 0%, var(--background) 50%)",
            "radial-gradient(circle at 50% 50%, hsl(var(--primary)/0.2) 0%, var(--background) 50%)",
          ],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute inset-0"
      />

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 relative z-10">
        <motion.div
          style={{ y, opacity }}
          className="max-w-4xl mx-auto text-center"
        >
          <FadeIn delay={0.2}>
            <div className="flex items-center justify-center gap-2 mb-6">
              <motion.div
              // animate={{
              //   rotate: [0, 360],
              // }}
              // transition={{
              //   duration: 4,
              //   repeat: Infinity,
              //   ease: "linear",
              // }}
              >
                <Sparkles className="w-5 h-5 text-primary" />
              </motion.div>
              <MagneticText>
                <span className="text-primary">Premium Web Design Agency</span>
              </MagneticText>
            </div>
          </FadeIn>

          <TextReveal
            text="We Craft Digital Experiences That Matter"
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/50"
          />

          <FadeIn delay={0.6}>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Transform your digital presence with our cutting-edge design
              solutions. We blend creativity with technology to build websites
              that leave a lasting impression.
            </p>
          </FadeIn>

          <FadeIn delay={0.8}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Magnetic>
                <Button size="lg" className="group relative overflow-hidden">
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"
                    animate={{
                      x: ["0%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                  />
                  <span className="relative">Start Your Project</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Magnetic>
            </div>
          </FadeIn>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-20">
            {[
              { icon: Zap, label: "Projects Completed", value: "200+" },
              {
                icon: MousePointerClick,
                label: "Client Satisfaction",
                value: "99%",
              },
              { icon: Sparkles, label: "Awards Won", value: "50+" },
            ].map((stat, index) => (
              <FadeIn key={index} delay={1 + index * 0.2} direction="up">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="text-center relative"
                >
                  <motion.div
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="absolute -inset-4 bg-gradient-radial from-primary/10 to-transparent rounded-full opacity-0 group-hover:opacity-100"
                  />
                  <stat.icon className="w-6 h-6 mx-auto mb-4 text-primary" />
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 100,
                      delay: 1.2 + index * 0.2,
                    }}
                    className="text-3xl font-bold mb-2"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          {/* Parallax text banner */}
          <div className="mt-32 -mb-20 opacity-30">
            <ParallaxText baseVelocity={-2}>
              INNOVATIVE DESIGNS • PREMIUM QUALITY • EXCEPTIONAL RESULTS •
            </ParallaxText>
          </div>
        </motion.div>
      </div>

      {/* Animated decorative elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
      />
    </section>
  );
}
