import PageTransition from "@/components/PageTransition";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CredentialsBar from "@/components/CredentialsBar";
import Specialties from "@/components/Specialties";
import About from "@/components/About";
import Lawyers from "@/components/Lawyers";
import OtherServices from "@/components/OtherServices";
import WhyUs from "@/components/WhyUs";
import FAQ from "@/components/FAQ";
import CTAFinal from "@/components/CTAFinal";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import GradientDivider from "@/components/GradientDivider";

const Index = () => {
  return (
    <PageTransition>
      <Header />
      <main>
        <Hero />
        <CredentialsBar />
        <GradientDivider variant="gold-accent" />
        <Specialties />
        <GradientDivider variant="gold-accent" />
        <About />
        <GradientDivider variant="gold-accent" />
        <Lawyers />
        <OtherServices />
        <GradientDivider variant="gold-accent" />
        <WhyUs />
        <GradientDivider variant="gold-accent" />
        <FAQ />
        <GradientDivider variant="gold-accent" />
        <CTAFinal />
      </main>
      <Footer />
      <WhatsAppButton />
    </PageTransition>
  );
};

export default Index;
