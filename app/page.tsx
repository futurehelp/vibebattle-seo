import SiteNav from "@/components/site-nav";
import SiteFooter from "@/components/site-footer";
import HomeDocs from "@/components/home-docs";

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="min-h-screen bg-[#05070b] text-white">
        <div className="bg-grid relative overflow-hidden">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(22,163,255,0.08),transparent_28%),radial-gradient(circle_at_70%_18%,rgba(255,214,10,0.05),transparent_20%),radial-gradient(circle_at_82%_24%,rgba(255,59,129,0.07),transparent_24%)]" />
          <HomeDocs />
        </div>
      </main>

      <SiteFooter />
    </>
  );
}
