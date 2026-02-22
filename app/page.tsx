import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { FAQSection } from "./components/FAQSection";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { PainSection } from "./components/PainSection";
import { TrustSection } from "./components/TrustSection";
import { WaitlistForm } from "./components/WaitlistForm";

export default function Page() {
  return (
    <div className="min-h-screen bg-white" dir="rtl">
      <Header />
      <main className="pt-0">
        <HeroSection />
        <PainSection />
        <HowItWorksSection />
        <TrustSection />
        <FAQSection />
        <WaitlistForm />
      </main>
      <Footer />
    </div>
  );
}
