import type { Metadata } from "next";
import Link from "next/link";

const blogPosts = [
  {
    title: "Why calm comes before consistency",
    category: "Nervous System",
    excerpt:
      "A regulated nervous system makes focused action easier to repeat, especially when life feels loud.",
    readTime: "4 min read",
  },
  {
    title: "The hidden cost of dopamine overload",
    category: "Attention",
    excerpt:
      "Constant stimulation trains the mind to avoid the quiet work that actually changes your future.",
    readTime: "5 min read",
  },
  {
    title: "Building from your future self",
    category: "Identity",
    excerpt:
      "Identity-driven action helps goals feel less distant and turns aligned action into a daily practice.",
    readTime: "3 min read",
  },
];

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Notes from NeuroAlign on attention, nervous system regulation, future-self identity, and aligned action for the iOS and Android app.",
};

export default function BlogPage() {
  return (
    <main className="premium-noise min-h-screen overflow-hidden bg-[#F7F1E8] text-[#15110D]">
      <section className="relative py-16 md:py-20 lg:py-28">
        <div className="absolute right-[-12%] top-[-18%] h-[440px] w-[440px] rounded-full bg-[rgba(217,181,139,0.24)] blur-3xl" />
        <div className="absolute left-[-10%] top-[18%] h-[360px] w-[360px] rounded-full bg-[rgba(122,31,43,0.08)] blur-3xl" />

        <div className="relative mx-auto w-full max-w-[1200px] px-5 sm:px-8">
          <nav className="mb-16 flex items-center justify-between">
            <Link href="/" className="text-[13px] font-bold tracking-[0.2em] text-[#15110D]">
              NEUROALIGN
            </Link>
            <Link
              href="/"
              className="inline-flex min-h-11 items-center justify-center rounded-full border border-[rgba(122,31,43,0.12)] bg-[#FFF8EE]/70 px-5 text-[13px] font-semibold text-[#15110D] transition hover:text-[#7A1F2B]"
            >
              Back Home
            </Link>
          </nav>

          <div className="max-w-[760px]">
            <p className="section-label">NeuroAlign Blog</p>
            <h1 className="mt-5 text-[42px] font-bold leading-[1.05] tracking-[-0.045em] text-[#15110D] sm:text-[58px] lg:text-[72px]">
              Notes on attention, identity, and nervous system alignment.
            </h1>
            <p className="mt-6 max-w-[620px] text-[16px] leading-[1.65] text-[#756A5E] sm:text-[18px]">
              A growing library for ambitious people learning to protect attention, regulate their
              state, and build from their future self.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {blogPosts.map((post) => (
              <article key={post.title} className="premium-card rounded-[28px] p-6 sm:p-7">
                <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#7A1F2B]">
                  {post.category}
                </p>
                <h2 className="mt-5 text-[22px] font-semibold leading-[1.12] tracking-[-0.035em] text-[#15110D]">
                  {post.title}
                </h2>
                <p className="mt-4 text-[15px] leading-[1.6] text-[#756A5E]">{post.excerpt}</p>
                <p className="mt-8 text-[13px] font-semibold text-[#15110D]">{post.readTime}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
