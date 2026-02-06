import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/sections/Hero";
import { IntakeModule } from "@/components/sections/IntakeModule";
import { ProductionSection } from "@/components/sections/ProductionSection";
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
      {(openTrack) => (
        <>
          <Hero />

          <IntakeModule onSelectTrack={openTrack} />

          <ProductionSection />

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

          <SystemBand items={["Cultivation", "Processing", "Coordination"]} />

          <InnovationPreview />

          <ExpertiseModule />

          <ContactBlock />
        </>
      )}
    </Layout>
  );
};

export default Index;
