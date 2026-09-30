import Image from "next/image";

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
};

type TestimonialCardProps = {
  testimonial: Testimonial;
};

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <article className="flex min-h-[380px] w-full max-w-[380px] flex-col justify-self-center rounded-[20px] bg-white px-5 pb-6 pt-5 text-[#171717] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={64}
        height={64}
        className="size-16 rounded-full object-cover"
      />

      <h3 className="mt-5 font-poppins text-lg font-bold leading-tight">{testimonial.name}</h3>
      <p className="mt-1 font-satoshi text-sm text-[#003be2]">{testimonial.role}</p>

      <blockquote className="mt-6 font-satoshi text-base leading-[1.55] text-[#606060]">
        &quot;{testimonial.quote}&quot;
      </blockquote>
    </article>
  );
};

export default TestimonialCard;