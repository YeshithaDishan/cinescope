import Footer from "@/components/footer";
import HeaderNav from "@/components/header-nav"; // alias import
import FeaturedMovies from "@/components/home/featured-movies";
import HeroBanner from "@/components/home/hero-banner";

// export const revalidate = 3600; // invalidate every hour

// SSR - Server Side Rendered - Server Component
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeaderNav />
      <main className="flex-1">
        <HeroBanner />
        <FeaturedMovies />
      </main>
      <Footer />
    </div>
  );
}
