import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Organize } from "@/components/sections/Organize";
import { Newsletter } from "@/components/sections/Newsletter";
import { Partners } from "@/components/sections/Partners";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Organize />
      <Newsletter />
      <Partners />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
    </>
  );
}
