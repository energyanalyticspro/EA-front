import ActivityBlock from "@/components/ActivityBlock";
import CertificatesBlock from "@/components/CertificatesBlock";
import ContactUsBlock from "@/components/ContactUsBlock";
import HeroBlock from "@/components/HeroBlock";
import InterviewBlock from "@/components/InterviewBlock";
import ResponsBlock from "@/components/ResponsBlock";
import ServicesBlock from "@/components/ServicesBlock";

export default function Home() {
  return (
    <main>
      <HeroBlock />
      <ServicesBlock />
      <ResponsBlock />
      <ActivityBlock />
      <ContactUsBlock />
      <CertificatesBlock />
      <InterviewBlock />
    </main>
  );
}
