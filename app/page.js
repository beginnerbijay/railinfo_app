import Hero from "./componets/Hero";
import Features from "./componets/Features";
import Goal from "./componets/Goal";
import Download from "./componets/Download";
import Faq from "./componets/Faq";

export default function Home() {
  return (
    <>
      <Hero />
      <Goal />
      <Features />
      <Faq/>
      <Download/>
    </>
  );
}
