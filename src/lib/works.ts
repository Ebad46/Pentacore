export type WorkItem = {
  slug: string;
  title: string;
  category: string;
  desc: string;
  overview: string;
  color: string;
  offset: number;
  image: string;
  alt: string;
  tech: string;
  timeline: string;
  impact: string;
  link: string;
};

export const works: WorkItem[] = [
  {
    slug: "garage-web",
    title: "Garage Web",
    category: "Garage Web",
    desc: "A modern service booking portal for auto workshops with a clean, responsive interface.",
    overview: "Designed a fast garage web experience that helps customers book repairs, view services, and manage appointments.",
    color: "from-sky-500/30 to-transparent",
    offset: 0,
    image: "/reddune.png",
    alt: "Garage web project preview",
    tech: "Next.js, Tailwind CSS, Node.js",
    timeline: "5 Weeks",
    impact: "Improved booking conversions by 28%",
    link: "https://reddunegermanexperts.com"
  },
  {
    slug: "ecommerce-backend-web",
    title: "Ecommerce Backend Web",
    category: "Ecommerce with Backend",
    desc: "A full-stack ecommerce storefront with backend inventory, checkout, and order management.",
    overview: "Built a scalable commerce system with product administration, secure payments, and a polished customer experience.",
    color: "from-purple-500/30 to-transparent",
    offset: 40,
    image: "/ecommerce.png",
    alt: "Ecommerce backend web project preview",
    tech: "Next.js, Express, PostgreSQL",
    timeline: "7 Weeks",
    impact: "Reduced checkout abandonment by 35%",
    link: "https://pentacore-ecommerce-5.vercel.app/"
  },
  {
    slug: "gym-web",
    title: "Gym Web",
    category: "Gym Web",
    desc: "A fitness-focused website with class schedules, trainer profiles, and membership onboarding.",
    overview: "Crafted a high-energy gym web platform that drives member signups and highlights premium training programs.",
    color: "from-emerald-500/30 to-transparent",
    offset: 80,
    image: "/gym.png",
    alt: "Gym web project preview",
    tech: "Next.js, Sanity, Stripe",
    timeline: "4 Weeks",
    impact: "Increased membership signups by 22%",
    link: "https://gym-website-jet-gamma.vercel.app/"
  }
];

export function getWorkBySlug(slug: string) {
  return works.find((work) => work.slug === slug);
}
