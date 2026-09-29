import Hero from "@/componets/home/Hero";
import Carousel from "@/componets/home/Carousel";
import Nav from "@/componets/shared/nav";
import DiscoverSection from "@/componets/home/DiscoverSection";
import ExplorePaths from "@/componets/home/ExplorePaths";
import YourPathSection from "@/componets/home/YourPathSection";
import UnlockSection from "@/componets/home/UnlockSection";
import TestimonialsSection from "@/componets/home/TestimonialsSection";
import Footer from "@/componets/shared/footer";


export default function Home() {
  return (
    <div  >
      <div className='bg-[#003be2]'>
        <div className="mx-auto">
          <Nav />
          <Hero></Hero>
        </div>
      </div>
      <Carousel />
      <DiscoverSection></DiscoverSection>
      <ExplorePaths></ExplorePaths>
      <YourPathSection></YourPathSection>
      <UnlockSection></UnlockSection>
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
