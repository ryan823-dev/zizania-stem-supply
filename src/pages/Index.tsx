import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { SupplyPreview } from "@/components/sections/SupplyPreview";
import { CultivationPreview } from "@/components/sections/CultivationPreview";
import { InnovationPreview } from "@/components/sections/InnovationPreview";
import { ExpertiseModule } from "@/components/sections/ExpertiseModule";
import { ContactBlock } from "@/components/sections/ContactBlock";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <SupplyPreview />
      <CultivationPreview />
      <InnovationPreview />
      <ExpertiseModule />
      <ContactBlock />
    </Layout>
  );
};

export default Index;
