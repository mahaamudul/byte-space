import Hero from "@/componets/home/Hero";
import Carousel from "@/componets/home/Carousel";
import Nav from "@/componets/shared/nav";
import DiscoverSection from "@/componets/home/DiscoverSection";


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
    </div>
  );
}
