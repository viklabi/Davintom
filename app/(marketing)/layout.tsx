import { SiteHeader } from "@/components/marketing/SiteHeader";
import Footer from "@/components/marketing/Footer";

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-cream text-brand-ink">
      <SiteHeader />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
}