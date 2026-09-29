import Image from "next/image";

const assetPath = "/assets/hero/";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-72px+120px)] overflow-hidden bg-[#003be2] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:90px_90px] text-white">
      <Image
        src={`${assetPath}Mask Group.png`}
        alt=""
        width={266}
        height={387}
        className="pointer-events-none absolute -left-14 top-32 z-0 hidden w-44 md:block lg:w-56"
      />
      <Image
        src={`${assetPath}hero-right.png`}
        alt=""
        width={213}
        height={372}
        className="pointer-events-none absolute -right-6 top-28 z-0 hidden w-40 md:block lg:w-52"
      />
      <Image
        src={`${assetPath}hero-spiral.png`}
        alt=""
        width={317}
        height={332}
        className="pointer-events-none absolute -right-2 bottom-16 z-10 hidden w-36 md:block lg:w-52"
      />
      <Image
        src={`${assetPath}Mask Group (1).png`}
        alt=""
        width={344}
        height={343}
        className="pointer-events-none absolute -left-2 bottom-8 z-10 hidden w-40 md:block lg:w-48"
      />
      <Image
        src={`${assetPath}Frame.png`}
        alt=""
        width={177}
        height={176}
        className="pointer-events-none absolute left-[14%] top-[42%] z-10 hidden w-24 md:block lg:w-32"
      />
      <Image
        src={`${assetPath}Cone.png`}
        alt=""
        width={190}
        height={189}
        className="pointer-events-none absolute right-[14%] top-[46%] z-10 hidden w-24 md:block lg:w-32"
      />

      <div className="relative z-20 mx-auto flex max-w-4xl flex-col items-center px-5 pb-24 pt-12 text-center sm:pt-14 lg:pt-10">
        <h1 className="max-w-4xl font-poppins tracking-wide  text-4xl font-semibold leading-[1.05] tracking-[-0.04em] sm:text-5xl lg:text-[72px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>
        <p className="mt-7 font-satoshi max-w-2xl text-xs font-light leading-6 text-white/90 sm:text-sm">
         Unlock your creativity, gain valuable knowledge, and grow your business with our wide range of courses.
        </p>

        <form className="mt-10 mb-12 flex w-full max-w-[438px] items-center gap-3">
          <label className="flex h-10 min-w-0 flex-1 items-center gap-2 rounded-full bg-white px-4 text-left text-xs text-[#7b8190]">
            <span aria-hidden="true" className="text-base leading-none">⌕</span>
            <input
              type="search"
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              className="min-w-0 flex-1 bg-transparent outline-none placeholder:text-[#9b9eaa]"
            />
          </label>
          <button type="submit" className="h-10 rounded-full bg-[#c7ff00] px-5 text-xs font-medium text-[#07143f] transition-transform hover:scale-105">
            Search
          </button>
        </form>
      </div>

      <div className="pointer-events-none mt-20 absolute inset-x-0 bottom-0 z-10 h-[46%] min-h-[330px]">
        <Image
          src={`${assetPath}Ellipse 7.png`}
          alt=""
          width={1149}
          height={442}
          className="absolute bottom-[-40%] left-1/2 w-[min(88vw,980px)] -translate-x-1/2"
        />
        <Image
          src={`${assetPath}Image.png`}
          alt="Student learning online"
          width={722}
          height={515}
          className="absolute bottom-[-2%] left-1/2 w-[min(72vw,590px)] -translate-x-1/2"
          priority
        />
       
        
       
        <Image
          src={`${assetPath}Auto Layout Vertical (2).png`}
          alt="Learning progress 55 percent"
          width={208}
          height={70}
           className="absolute left-[calc(55%-440px)] top-[4%] w-40 lg:w-48"
          
        />
         <Image
          src={`${assetPath}Auto Layout Vertical (1).png`}
          alt="Happy students"
          width={232}
          height={131}
         className="absolute right-[calc(50%-380px)] top-[22%] w-40 lg:w-48"
        />
         <Image
          src={`${assetPath}Auto Layout Vertical.png`}
          alt="UI/UX Design course statistics"
          width={258}
          height={121}
          className="absolute left-[calc(45%-380px)] top-[50%] w-44 lg:w-52"
        />
      </div>
    </section>
  );
}