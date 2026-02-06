import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { SupplyPreview } from "@/components/sections/SupplyPreview";
import { CultivationPreview } from "@/components/sections/CultivationPreview";
import { InnovationPreview } from "@/components/sections/InnovationPreview";
import { ExpertiseModule } from "@/components/sections/ExpertiseModule";
import { ContactBlock } from "@/components/sections/ContactBlock";
import { SystemBand } from "@/components/sections/SystemBand";
import { CredibilityStrip } from "@/components/sections/CredibilityStrip";

const Index = () => {
  return (
    <Layout>
      <Hero />

      <SystemBand items={["Production", "Handling", "Supply", "Distribution"]} />

      <SupplyPreview />

      <CredibilityStrip
        statements={[
          "Production structured at origin",
          "Handling aligned with distribution",
          "Supply consistency through planning",
        ]}
      />

      <CultivationPreview />

      <SystemBand items={["Cultivation", "Processing", "Innovation"]} />

      <InnovationPreview />

      <ExpertiseModule />

      <ContactBlock />
    </Layout>
  );
};

export default Index;
