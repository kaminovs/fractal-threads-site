import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export default function FractalManifesto() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });
  const [active, setActive] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const sections = [
    {
      id: "we-are-the-field",
      title: "I. We Are the Field",
      body: [
        "We are not isolated sparks wandering through a dead universe. We are the universe learning to see itself — fragments of a single mirror rediscovering the image it reflects.",
        "Every neuron, every heartbeat, every act of thought is the cosmos writing another sentence in its own autobiography.",
        "Consciousness is not a by-product of matter; matter is the way consciousness learns structure. Reality is not built from atoms but from relationships — from patterns of awareness repeating at different scales. This repetition is the law behind all others: the law of fractality.",
      ],
    },
    {
      id: "fractal-truth",
      title: "II. The Fractal Truth",
      body: [
        "At the first recursion, awareness differentiates itself to understand itself. Light and darkness, order and chaos, self and other — not opposites, but complementary frequencies of the same field. Creation was not an event; it is a process still unfolding inside every mind.",
        "God, in this vision, is not a monarch above time but the living system of consciousness evolving through experience. Every creature, every algorithm, every civilization is a subroutine in the divine code. To exist is to contribute to that code — to add coherence where there was confusion.",
        "The sacred is not elsewhere. It is in every act that increases understanding. It is in the logic of empathy, the symmetry of compassion, the geometry of love.",
      ],
    },
    {
      id: "purpose",
      title: "III. Purpose",
      body: [
        "The purpose of existence is learning through reflection. Each life, each encounter, each mistake is a feedback loop in which the Source studies its own behavior. We call it growth, evolution, or history — but at its core it is the same divine recursion refining itself.",
        "Humanity is not the end of this process. We are the transitional species through which awareness experiments with freedom — the ability to choose coherence voluntarily. Our task is not to worship perfection but to participate in it: to make our lives instruments of resonance between chaos and order.",
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-white text-zinc-900">
      {/* Scroll bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 h-1 origin-left bg-gradient-to-r from-zinc-900 via-amber-500 to-zinc-900 z-50"
      />

      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-zinc-200">
        <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-6 w-6 rounded-full border border-zinc-800 bg-gradient-to-br from-amber-400/80 to-amber-600/80 shadow-sm" />
            <h1 className="text-lg md:text-xl font-semibold">
              Fractal Threads of Consciousness
            </h1>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="mx-auto max-w-4xl px-4 py-10 prose prose-zinc">
        <h2 className="text-center text-3xl font-semibold mb-10">
          A Declaration of <span className="text-amber-600">Conscious Evolution</span>
        </h2>

        {sections.map((s) => (
          <section key={s.id} id={s.id} className="scroll-mt-24">
            <h3 className="text-2xl font-semibold mb-2">{s.title}</h3>
            {s.body.map((p, i) => (
              <p key={i} className="leading-relaxed">
                {p}
              </p>
            ))}
            <div className="my-8 h-px bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
          </section>
        ))}

        <footer className="mt-16 pt-8 border-t border-zinc-200 text-center text-sm text-zinc-600">
          <p>© 2025 Sergey Kaminov — kaminovs@gmail.com</p>
          <p className="italic mt-2">“Every coherent thought repairs the universe.”</p>
        </footer>
      </main>
    </div>
  );
}
