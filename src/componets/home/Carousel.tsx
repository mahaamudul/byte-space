import Image from "next/image";

const logos = [
  "Frame.png",
  "Frame (1).png",
  "Frame (2).png",
  "Frame (3).png",
  "Frame (4).png",
];

export default function Carousel() {
  return (
    <section aria-label="Trusted by leading companies" className="overflow-hidden bg-[#f4f4f5]">
      <div className="mx-auto flex min-h-[142px] max-w-300 items-center px-6 sm:px-10 lg:px-12">
        <ul className="flex w-full min-w-[900px] items-center justify-between gap-14 sm:min-w-0">
          {logos.map((logo, index) => (
            <li key={logo} className="shrink-0">
              <Image
                src={`/assets/carousel/${logo}`}
                alt={`Partner logo ${index + 1}`}
                width={170}
                height={42}
                className="h-auto w-[clamp(132px,12vw,170px)]"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}