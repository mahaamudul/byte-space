import Hero from "@/componets/home/Hero";
import Nav from "@/componets/shared/nav";


export default function Home() {
  return (
    <div  >
      <div className='bg-[#003be2]'>
        <div className="mx-auto">
          <Nav />
          <Hero></Hero>
        </div>
      </div>
    </div>
  );
}
