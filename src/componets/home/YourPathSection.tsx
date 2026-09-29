import Image from "next/image";

const YourPathSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#fcfcff] py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src="/assets/your%20path/Ellipse%2011.png"
          alt=""
          width={1025}
          height={711}
          className="absolute left-0 top-0 w-[min(58vw,650px)] max-w-none"
        />
        <Image
          src="/assets/your%20path/Ellipse%2010.png"
          alt=""
          width={669}
          height={719}
          className="absolute right-0 top-0 w-[min(38vw,430px)] max-w-none"
        />
        <Image
          src="/assets/your%20path/Ellipse%209.png"
          alt=""
          width={669}
          height={1217}
          className="absolute left-0 top-[30%] w-[min(32vw,360px)] max-w-none"
        />
        <Image
          src="/assets/your%20path/Ellipse%2012.png"
          alt=""
          width={425}
          height={554}
          className="absolute bottom-0 left-0 w-[min(28vw,300px)] max-w-none"
        />
        <Image
          src="/assets/your%20path/Ellipse%208.png"
          alt=""
          width={758}
          height={712}
          className="absolute bottom-0 right-0 w-[min(52vw,620px)] max-w-none"
        />
        
      </div>

      <div className="relative z-10 mx-auto max-w-320 space-y-4 px-5 sm:px-8 lg:space-y-1">
        <div className="grid w-full items-center gap-1 lg:grid-cols-2 lg:gap-4">
          <div className="flex flex-col justify-center pt-2 lg:pl-8">
          <h2 id="growth-title" className="font-poppins text-[42px] font-bold leading-[1.04] tracking-[-0.04em] text-[#202124] sm:text-[50px]">
            Your Path to Professional Growth Starts Here!
          </h2>
          <p className="mt-4 max-w-[390px] font-satoshi text-xs leading-5 text-[#5f626b] sm:text-[13px]">
           Explore our curated selection of courses tailored to enhance your capabilities and accelerate your career journey. Whether you are looking to sharpen specific skills, gain industry expertise, or embark on a new career path entirely, we have the resources you need.
          </p>

          <div className="mt-6 flex gap-8">
            {[
              ["12K", "Students"],
              ["70+", "Courses"],
              ["16", "Creators"],
            ].map(([value, label]) => (
              <div key={label}>
                <p className="font-poppins text-xl font-semibold leading-none text-[#003be2]">{value}</p>
                <p className="mt-2 font-satoshi text-[10px] text-[#555861]">{label}</p>
              </div>
            ))}
          </div>
          </div>

          <div className="flex items-center justify-center ">
            <Image
              src="/assets/your%20path/Frame%2011.png"
              alt="Students learning and tracking course progress"
              width={703}
              height={697}
              className="w-full max-w-[545px] object-contain"
            />
          </div>
        </div>

        <div className="grid w-full items-center gap-1 lg:grid-cols-2 lg:gap-4">
          <div className="flex items-center justify-center lg:justify-start">
            <Image
              src="/assets/your%20path/Frame%2012.png"
              alt="Student managing courses and tracking revenue"
              width={587}
              height={719}
              className="w-full max-w-[470px] object-contain"
            />
          </div>

          <div className="flex flex-col justify-center lg:pl-4">
          <h2 id="manage-title" className="font-poppins text-[42px] font-bold leading-[1.04] tracking-[-0.04em] text-[#202124] sm:text-[50px]">
            Create &amp; Manage Courses Easily.
          </h2>
          <p className="mt-4 max-w-[400px] font-satoshi text-xs leading-5 text-[#5f626b] sm:text-[13px]">
            ByteSpace supports individuals or entities in the creation, publication, and administration of educational courses.
          </p>

          <ul className="mt-5 space-y-2.5 font-satoshi text-xs text-[#272932]">
            {["Share Your Expertise", "Monetize Your Passion", "Flexibility and Autonomy", "Build a Community"].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="flex size-3 items-center justify-center rounded-full bg-[#003be2] text-[8px] font-bold text-white">✓</span>
                {item}
              </li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourPathSection;