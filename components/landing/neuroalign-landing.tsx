"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import type { FormEvent } from "react";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Method", href: "#method" },
  { label: "Science", href: "#science" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Blog", href: "/blog" },
];

const problemCards = [
  {
    icon: "bell",
    title: "Distraction",
    text: "Your attention is pulled in a hundred directions every day.",
  },
  {
    icon: "wave",
    title: "Emotional Inconsistency",
    text: "Stress, anxiety, and pressure keep your nervous system in survival mode.",
  },
  {
    icon: "spark",
    title: "Dopamine Overload",
    text: "Instant stimulation trains your brain to avoid deeper focus.",
  },
  {
    icon: "battery",
    title: "Mental Exhaustion",
    text: "Decision fatigue slowly drains your clarity and consistency.",
  },
  {
    icon: "shield",
    title: "Survival Mode",
    text: "You react instead of creating, trying to get through the day.",
  },
];

const possibilityItems = [
  "Clear thoughts",
  "Steady emotions",
  "Stronger focus",
  "Intentional mornings",
  "Aligned action",
  "Consistent growth",
];

const steps = [
  {
    number: "01",
    icon: "shield",
    title: "Protect",
    text: "Reduce morning overload and reclaim your attention.",
  },
  {
    number: "02",
    icon: "wave",
    title: "Regulate",
    text: "Calm your nervous system and restore emotional stability.",
  },
  {
    number: "03",
    icon: "eye",
    title: "Visualize",
    text: "Reconnect with the future version of yourself.",
  },
  {
    number: "04",
    icon: "target",
    title: "Align",
    text: "Take focused action consistently toward your goals.",
  },
];

const appScreens = [
  "Morning Protection",
  "Emotional Check-in",
  "Nervous System Reset",
  "Future Self Visualization",
  "One Aligned Action",
  "AI Reflection Coach",
];

const trustItems = ["Early access", "Special pricing", "Help shape the future", "Cancel anytime"];

const truthItems = [
  "A calmer mind.",
  "Clearer focus.",
  "Better emotional control.",
  "More aligned action.",
  "That changes everything.",
];

const smoothEase: [number, number, number, number] = [0.22, 1, 0.36, 1];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.72, ease: smoothEase },
  },
};

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.04,
    },
  },
};

export function NeuroAlignLanding() {
  return (
    <main className="premium-noise min-h-screen overflow-hidden bg-[#F7F1E8] text-[#15110D]">
      <Navbar />
      <HeroSection />
      <ProblemSection />
      <PossibilitySection />
      <SystemSection />
      <AppShowcaseSection />
      <TruthSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "border-b border-[rgba(122,31,43,0.1)] bg-[#F7F1E8]/72 shadow-[0_12px_36px_rgba(21,17,13,0.05)] backdrop-blur-2xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <Container className="flex h-[72px] items-center justify-between">
        <a href="#" className="flex items-center gap-3" aria-label="NeuroAlign home">
          <LogoMark />
          <span className="text-[13px] font-bold tracking-[0.2em] text-[#15110D]">NEUROALIGN</span>
        </a>

        <nav className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-[13px] font-medium text-[#15110D]/80 transition hover:text-[#7A1F2B]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          href="#early-access"
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#7A1F2B] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_14px_32px_rgba(122,31,43,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8C2533] active:translate-y-0"
        >
          Join Early Access <span aria-hidden="true">→</span>
        </a>
      </Container>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[760px] overflow-hidden pt-[96px] sm:min-h-[820px] lg:min-h-[820px] lg:pt-[108px]">
      <Image
        src="/hero-cinematic.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="warm-cinematic-image scale-[1.02] object-cover object-[58%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,232,0.95)_0%,rgba(247,241,232,0.84)_31%,rgba(247,241,232,0.36)_57%,rgba(247,241,232,0.05)_100%),radial-gradient(circle_at_20%_18%,rgba(255,248,238,0.74),transparent_29%),radial-gradient(circle_at_52%_46%,rgba(122,31,43,0.1),transparent_34%)]" />
      <div className="absolute inset-x-0 bottom-0 h-[30%] bg-gradient-to-t from-[#F7F1E8] via-[#F7F1E8]/52 to-transparent" />
      <div className="floating-gradient absolute left-[-12%] top-[-18%] h-[440px] w-[440px] rounded-full bg-[rgba(122,31,43,0.1)] blur-3xl" />
      <div className="floating-gradient absolute right-[-10%] top-[8%] h-[520px] w-[520px] rounded-full bg-[rgba(217,181,139,0.3)] blur-3xl" />

      <Container className="relative flex min-h-[640px] items-center py-16 sm:min-h-[700px] lg:min-h-[720px] lg:py-0">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="relative z-10 max-w-[680px] pt-4"
        >
          <motion.p variants={fadeUp} className="section-label">
            For ambitious people who feel mentally overloaded
          </motion.p>
          <motion.h1
            variants={fadeUp}
            className="mt-5 max-w-[680px] text-[42px] font-bold leading-[1.05] tracking-[-0.045em] text-[#15110D] sm:text-[58px] lg:text-[72px]"
          >
            Your mind wasn&apos;t built for this.{" "}
            <span className="text-[#7A1F2B]">But your goals still matter.</span>
          </motion.h1>
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-[480px] text-[16px] leading-[1.65] text-[#3B332C] sm:mt-7 sm:text-[18px]"
          >
            You wake up motivated. But somewhere between notifications, stress, scrolling, work,
            pressure, and mental exhaustion... you lose connection with the person you want to
            become.
          </motion.p>
          <motion.div variants={fadeUp} className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center sm:gap-5">
            <PrimaryButton href="#early-access">Join Early Access</PrimaryButton>
            <GhostButton href="#method">Learn More</GhostButton>
          </motion.div>
          <motion.div variants={fadeUp} className="mt-12 flex items-start gap-4 sm:mt-16">
            <LogoMark small />
            <p className="text-[15px] leading-[1.6] text-[#15110D]">
              You are not lazy.
              <br />
              <span className="text-[#756A5E]">Your nervous system is overloaded.</span>
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}

function ProblemSection() {
  return (
    <Section id="science" className="border-y border-[rgba(122,31,43,0.08)] bg-[#FFF8EE]/48 py-16 md:py-20 lg:py-28">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-10"
        >
          <div>
            <motion.p variants={fadeUp} className="section-label">
              The real problem
            </motion.p>
            <motion.h2
              variants={fadeUp}
              className="mt-3 max-w-[760px] text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#15110D] sm:text-[42px] lg:text-[46px]"
            >
              Most people are trying to build a better future with an overstimulated nervous
              system.
            </motion.h2>

            <motion.div
              variants={stagger}
              className="mt-10 grid gap-4 sm:mt-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5"
            >
              {problemCards.map((card) => (
                <motion.div
                  key={card.title}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className="premium-card group rounded-[28px] p-6 transition sm:p-7"
                >
                  <IconFrame icon={card.icon as IconName} />
                  <h3 className="mt-5 text-[18px] font-semibold leading-[1.15] tracking-[-0.025em] text-[#15110D]">
                    {card.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-[1.6] text-[#756A5E]">{card.text}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </Section>
  );
}

function PossibilitySection() {
  return (
    <Section className="relative min-h-[640px] overflow-hidden py-16 md:py-20 lg:min-h-[720px] lg:py-28">
      <Image
        src="/section-calm-morning.png"
        alt=""
        fill
        sizes="100vw"
        className="warm-cinematic-image scale-[1.03] object-cover object-[100%_50%]"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,232,0.96)_0%,rgba(247,241,232,0.82)_28%,rgba(247,241,232,0.28)_58%,rgba(247,241,232,0.05)_100%),radial-gradient(circle_at_72%_30%,rgba(122,31,43,0.14),transparent_26%),linear-gradient(180deg,rgba(247,241,232,0.22)_0%,rgba(247,241,232,0)_45%,rgba(247,241,232,0.46)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F7F1E8] to-transparent" />
      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid items-center gap-8 lg:grid-cols-[0.78fr_1.22fr_0.72fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="section-label">A different possibility</p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#15110D] sm:text-[42px] lg:text-[48px]">
              Imagine waking up with a calmer mind.
            </h2>
            <ul className="mt-7 space-y-3 sm:mt-8">
              {possibilityItems.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </ul>
            <p className="mt-7 text-[15px] font-semibold leading-[1.55] tracking-[-0.02em] text-[#15110D] sm:mt-8 sm:text-[16px]">
              That&apos;s the life you&apos;re trying to build.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="hidden min-h-[420px] lg:col-span-2 lg:block" />
        </motion.div>
      </Container>
    </Section>
  );
}

function SystemSection() {
  return (
    <Section id="method" className="border-y border-[rgba(122,31,43,0.08)] bg-[#FFF8EE]/52 py-16 md:py-20 lg:py-28">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
        >
          <motion.p variants={fadeUp} className="section-label">
            The NeuroAlign system
          </motion.p>
          <motion.h2
            variants={fadeUp}
            className="mt-3 max-w-[700px] text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#15110D] sm:text-[42px] lg:text-[48px]"
          >
            A neuroscience-inspired system designed to help you realign.
          </motion.h2>

          <motion.div
            variants={stagger}
            className="relative mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 xl:grid-cols-4"
          >
            {steps.map((step) => (
              <motion.div
                key={step.title}
                variants={fadeUp}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="premium-card relative rounded-[28px] p-6 text-center transition sm:p-7"
              >
                <p className="mb-5 text-[13px] font-bold tracking-[0.16em] text-[#7A1F2B]">
                  {step.number}
                </p>
                <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full border border-[rgba(122,31,43,0.1)] bg-[#FFF8EE] shadow-[0_18px_42px_rgba(122,31,43,0.09)]">
                  <Icon name={step.icon as IconName} className="h-8 w-8 text-[#7A1F2B]" />
                </div>
                <h3 className="mt-6 text-[20px] font-semibold leading-[1.15] tracking-[-0.03em]">{step.title}</h3>
                <p className="mx-auto mt-3 max-w-[240px] text-[15px] leading-[1.6] text-[#756A5E] xl:text-[13px]">
                  {step.text}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function AppShowcaseSection() {
  return (
    <Section id="how-it-works" className="relative py-16 md:py-20 lg:py-28">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid gap-10 lg:grid-cols-[300px_1fr] lg:gap-12"
        >
          <motion.div variants={fadeUp} className="pt-4">
            <p className="section-label">Built for real life</p>
            <h2 className="mt-3 text-[32px] font-semibold leading-[1.08] tracking-[-0.04em] text-[#15110D] sm:text-[42px] lg:text-[48px]">
              A daily system.
              <br />
              Powerful transformation.
            </h2>
            <p className="mt-6 text-[16px] leading-[1.65] text-[#756A5E] sm:mt-7 sm:text-[17px]">
              NeuroAlign combines neuroscience-backed practices with intuitive tools to help you
              become mentally aligned with the life you want to create.
            </p>
            <a
              href="#early-access"
              className="mt-7 inline-flex items-center gap-2 text-[14px] font-semibold text-[#7A1F2B]"
            >
              Explore the app <span aria-hidden="true">→</span>
            </a>
          </motion.div>

          <motion.div
            variants={stagger}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6"
          >
            {appScreens.map((screen, index) => (
              <motion.div
                key={screen}
                variants={fadeUp}
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
                className={index % 2 === 0 ? "pt-0" : "pt-8"}
              >
                <AppScreen title={screen} index={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function TruthSection() {
  return (
    <Section className="relative min-h-[720px] overflow-hidden border-y border-[rgba(122,31,43,0.08)] py-16 md:py-20 lg:min-h-screen lg:py-28">
      <Image
        src="/truth-cinematic.png"
        alt=""
        fill
        sizes="100vw"
        className="warm-cinematic-image scale-[1.02] object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,241,232,0.04)_0%,rgba(247,241,232,0.16)_34%,rgba(247,241,232,0.82)_68%,rgba(247,241,232,0.98)_100%),radial-gradient(circle_at_25%_24%,rgba(122,31,43,0.16),transparent_30%),linear-gradient(180deg,rgba(247,241,232,0.16)_0%,rgba(247,241,232,0)_48%,rgba(247,241,232,0.58)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#F7F1E8] to-transparent" />
      <Container className="relative z-10">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid min-h-[560px] items-center gap-10 lg:min-h-[660px] lg:grid-cols-[0.92fr_1.08fr] lg:gap-12"
        >
          <motion.div variants={fadeUp} className="hidden min-h-[420px] lg:block" />

          <motion.div variants={fadeUp}>
            <p className="section-label">The truth</p>
            <h2 className="mt-4 max-w-[680px] text-[32px] font-semibold leading-[1.1] tracking-[-0.04em] text-[#15110D] sm:text-[42px] lg:text-[48px]">
              The goal is not becoming more productive.
              <br />
              <br />
              <span className="text-[#7A1F2B]">
                The goal is becoming the version of yourself capable of creating the life you want.
              </span>
            </h2>
            <ul className="mt-8 grid gap-3 sm:mt-9 sm:grid-cols-2">
              {truthItems.map((item) => (
                <ChecklistItem key={item}>{item}</ChecklistItem>
              ))}
            </ul>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function FinalCtaSection() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        setStatus("error");
        setMessage(data.message ?? "Something went wrong. Please try again.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "You are on the early access list.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Something went wrong. Please try again.");
    }
  }

  return (
    <Section id="early-access" className="relative py-16 md:py-20 lg:py-28">
      <Container>
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-120px" }}
          className="grid items-center gap-10 lg:grid-cols-[0.86fr_1.14fr]"
        >
          <motion.div variants={fadeUp}>
            <p className="section-label">Join the movement</p>
            <h2 className="mt-3 text-[34px] font-semibold leading-[1.08] tracking-[-0.045em] text-[#15110D] sm:text-[44px] lg:text-[48px]">
              Train your mind to support your future.
            </h2>
            <p className="mt-5 max-w-[430px] text-[16px] leading-[1.65] text-[#756A5E] sm:mt-6 sm:text-[17px]">
              Join the early NeuroAlign movement. Protect your attention. Align with your future.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <LogoMark />
              <p className="text-[13px] leading-relaxed text-[#756A5E]">
                Protect your attention.
                <br />
                Align with your future.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="glass-card rounded-[28px] p-5 sm:rounded-[32px] sm:p-6">
            <form className="grid gap-3 sm:grid-cols-[1fr_auto]" onSubmit={handleSubmit}>
              <label className="sr-only" htmlFor="email">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                placeholder="Enter your email"
                required
                disabled={status === "loading"}
                className="h-[52px] rounded-full border border-[rgba(122,31,43,0.11)] bg-[#FFF8EE]/82 px-5 text-[15px] outline-none transition placeholder:text-[#A59686] focus:border-[rgba(122,31,43,0.42)] focus:ring-4 focus:ring-[rgba(122,31,43,0.1)] sm:h-[56px]"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="h-[52px] rounded-full bg-[#7A1F2B] px-8 text-[14px] font-semibold text-white shadow-[0_16px_38px_rgba(122,31,43,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8C2533] active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-70 sm:h-[56px]"
              >
                {status === "loading" ? "Joining..." : "Join Early Access"}{" "}
                <span aria-hidden="true">→</span>
              </button>
            </form>
            {message ? (
              <p
                className={`mt-4 text-[13px] font-medium ${
                  status === "success" ? "text-[#7A1F2B]" : "text-[#8C2533]"
                }`}
              >
                {message}
              </p>
            ) : null}
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {trustItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-[12px] font-medium text-[#756A5E]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#7A1F2B]" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </Section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[rgba(122,31,43,0.1)] bg-[#EFE2D1]/60 py-10 sm:py-12">
      <Container>
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-4">
            <LogoMark />
            <p className="text-[13px] font-bold tracking-[0.2em] text-[#15110D]">NEUROALIGN</p>
          </div>
          <p className="mt-4 text-[13px] leading-[1.55] text-[#756A5E]">Protect your attention. Align your life.</p>
          <nav className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 sm:mt-8 sm:gap-x-7">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium text-[#756A5E] transition hover:text-[#7A1F2B]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <p className="mt-8 text-[12px] text-[#756A5E]">© 2026 NeuroAlign. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  );
}

function AppScreen({ title, index }: { title: string; index: number }) {
  const isMountain = title.includes("Visualization");
  return (
    <div className="screen-card mx-auto h-[298px] w-full max-w-[168px] overflow-hidden rounded-[28px] border border-[rgba(122,31,43,0.1)] bg-[#FFF8EE] p-3 xl:max-w-[140px]">
      <div className="flex h-full flex-col rounded-[22px] bg-[#F7F1E8] p-3">
        <p className="text-center text-[11px] font-bold leading-[1.2] tracking-[-0.02em] text-[#15110D]">{title}</p>
        {isMountain ? (
          <div className="mt-5 flex flex-1 flex-col gap-3">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[linear-gradient(145deg,rgba(122,31,43,0.12),rgba(217,181,139,0.28))]">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF8EE]/84 text-[#7A1F2B] shadow-[0_12px_24px_rgba(122,31,43,0.12)]">
                <Icon name="telescope" className="h-6 w-6" />
              </div>
            </div>
            <div className="space-y-2">
              {[100, 78, 56].map((width) => (
                <div
                  key={width}
                  className="h-2 rounded-full bg-[rgba(122,31,43,0.1)]"
                  style={{ width: `${width}%` }}
                />
              ))}
            </div>
            <div className="mt-auto rounded-2xl bg-[#15110D] px-3 py-3 text-center text-[10px] font-semibold text-white">
              Visualize
            </div>
          </div>
        ) : (
          <div className="mt-5 flex flex-1 flex-col gap-3">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(122,31,43,0.09)]">
              <Icon name={steps[index % steps.length].icon as IconName} className="h-7 w-7 text-[#7A1F2B]" />
            </div>
            <div className="space-y-2">
              {[0, 1, 2].map((line) => (
                <div
                  key={line}
                  className="h-2 rounded-full bg-[rgba(122,31,43,0.1)]"
                  style={{ width: `${line === 1 ? 84 : line === 2 ? 64 : 100}%` }}
                />
              ))}
            </div>
            <div className="mt-auto rounded-2xl bg-[#15110D] px-3 py-3 text-center text-[10px] font-semibold text-white">
              {index === 1 ? "Save Check-in" : index === 2 ? "Begin" : "Continue"}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function ChecklistItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-[15px] font-medium leading-[1.55] text-[#15110D] sm:text-[16px]">
      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-[rgba(122,31,43,0.24)] bg-[#FFF8EE] text-[#7A1F2B]">
        <Icon name="check" className="h-3 w-3" />
      </span>
      {children}
    </li>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[50px] w-full items-center justify-center rounded-full bg-[#7A1F2B] px-7 text-[14px] font-semibold text-white shadow-[0_18px_36px_rgba(122,31,43,0.22)] transition hover:-translate-y-0.5 hover:bg-[#8C2533] active:translate-y-0 sm:w-auto"
    >
      {children} <span className="ml-2" aria-hidden="true">→</span>
    </a>
  );
}

function GhostButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex min-h-[50px] w-full items-center justify-center gap-3 rounded-full px-5 text-[14px] font-semibold text-[#15110D] transition hover:text-[#7A1F2B] active:translate-y-0 sm:w-auto sm:px-2"
    >
      {children}
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-[rgba(122,31,43,0.14)] bg-[#FFF8EE]/84 text-[#7A1F2B]">
        <Icon name="play" className="h-3 w-3" />
      </span>
    </a>
  );
}

function IconFrame({ icon }: { icon: IconName }) {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(122,31,43,0.1)] bg-[#FFF8EE] shadow-[0_12px_26px_rgba(122,31,43,0.08)] transition group-hover:-translate-y-1">
      <Icon name={icon} className="h-5 w-5 text-[#7A1F2B]" />
    </div>
  );
}

function LogoMark({ small = false }: { small?: boolean }) {
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-full border border-[rgba(122,31,43,0.14)] bg-[#FFF8EE]/82 text-[#7A1F2B] shadow-[0_10px_24px_rgba(122,31,43,0.09)] ${
        small ? "h-9 w-9" : "h-11 w-11"
      }`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 32 32" className={small ? "h-5 w-5" : "h-6 w-6"}>
        <path
          d="M16 3.5 25.8 9v14L16 28.5 6.2 23V9L16 3.5Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
        />
        <path
          d="M16 8v16M11 11.5c2.5 1.2 3.9 3 5 5.4 1.1-2.4 2.5-4.2 5-5.4M11 20.5c2.4-1 3.9-2.7 5-5 1.1 2.3 2.6 4 5 5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.6"
        />
      </svg>
    </span>
  );
}

function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return <div className={`mx-auto w-full max-w-[1200px] px-5 sm:px-8 ${className}`}>{children}</div>;
}

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={className}>
      {children}
    </section>
  );
}

type IconName =
  | "battery"
  | "bell"
  | "brain"
  | "check"
  | "eye"
  | "home"
  | "more"
  | "play"
  | "shield"
  | "spark"
  | "target"
  | "telescope"
  | "user"
  | "wave";

function Icon({ name, className = "" }: { name: IconName; className?: string }) {
  const common = {
    fill: "none",
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
  };

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {name === "bell" && (
        <>
          <path {...common} d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" />
          <path {...common} d="M13.7 21a2 2 0 0 1-3.4 0" />
        </>
      )}
      {name === "wave" && <path {...common} d="M3 12c2.25-4 4.5-4 6.75 0s4.5 4 6.75 0S21 8 21 8" />}
      {name === "spark" && (
        <>
          <path {...common} d="m12 3 1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3Z" />
          <path {...common} d="m18 15 .8 2.2L21 18l-2.2.8L18 21l-.8-2.2L15 18l2.2-.8L18 15Z" />
        </>
      )}
      {name === "battery" && (
        <>
          <rect {...common} x="3" y="7" width="16" height="10" rx="2" />
          <path {...common} d="M21 11v2M7 11v2M11 11v2" />
        </>
      )}
      {name === "shield" && <path {...common} d="M12 3 20 6v6c0 5-3.4 7.8-8 9-4.6-1.2-8-4-8-9V6l8-3Z" />}
      {name === "eye" && (
        <>
          <path {...common} d="M2.5 12s3.5-6 9.5-6 9.5 6 9.5 6-3.5 6-9.5 6-9.5-6-9.5-6Z" />
          <circle cx="12" cy="12" r="2.6" {...common} />
        </>
      )}
      {name === "target" && (
        <>
          <circle cx="12" cy="12" r="8" {...common} />
          <circle cx="12" cy="12" r="3" {...common} />
          <path {...common} d="m15 9 4-4M17 5h2v2" />
        </>
      )}
      {name === "telescope" && (
        <>
          <path {...common} d="m4 12 9-5 3 5-9 5-3-5Z" />
          <path {...common} d="m15 6 2-1 3 5-2 1" />
          <path {...common} d="m9.5 15.5 2.5 4.5" />
          <path {...common} d="m12 16 4 4" />
          <path {...common} d="m10 16-3 4" />
          <path {...common} d="M11.2 9.1 14 14" />
        </>
      )}
      {name === "check" && <path {...common} d="m5 12 4 4L19 6" />}
      {name === "play" && <path {...common} d="m9 7 7 5-7 5V7Z" />}
      {name === "home" && <path {...common} d="m4 11 8-7 8 7v8a1 1 0 0 1-1 1h-5v-6h-4v6H5a1 1 0 0 1-1-1v-8Z" />}
      {name === "brain" && <path {...common} d="M9 4a4 4 0 0 0-4 4 4 4 0 0 0 .8 7.9A4 4 0 0 0 13 18V6a4 4 0 0 0-4-2Zm6 0a4 4 0 0 1 4 4 4 4 0 0 1-.8 7.9A4 4 0 0 1 11 18" />}
      {name === "user" && (
        <>
          <circle cx="12" cy="8" r="4" {...common} />
          <path {...common} d="M5 21a7 7 0 0 1 14 0" />
        </>
      )}
      {name === "more" && (
        <>
          <circle cx="5" cy="12" r="1" fill="currentColor" />
          <circle cx="12" cy="12" r="1" fill="currentColor" />
          <circle cx="19" cy="12" r="1" fill="currentColor" />
        </>
      )}
    </svg>
  );
}
