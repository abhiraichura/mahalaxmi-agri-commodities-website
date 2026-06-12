"use client"

import { motion } from "framer-motion"

interface TextRevealProps {
  text: string
  className?: string
  delay?: number
  as?: "h1" | "h2" | "h3" | "p" | "span"
}

export function TextReveal({
  text,
  className = "",
  delay = 0,
  as: Component = "h2",
}: TextRevealProps) {
  const words = text.split(" ")

  return (
    <Component className={className}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden mr-[0.25em]">
          <motion.span
            className="inline-block"
            initial={{ y: "100%" }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: delay + i * 0.05,
              ease: [0.25, 0.1, 0.25, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Component>
  )
}
