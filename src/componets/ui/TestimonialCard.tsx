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
    <article className="flex min-h-[424px] w-full flex-col rounded-[24px] bg-white px-6 pb-7 pt-6 text-[#171717] shadow-[0_2px_8px_rgba(0,0,0,0.03)]">
      <Image
        src={testimonial.avatar}
        alt={testimonial.name}
        width={80}
        height={80}
        className="size-20 rounded-full object-cover"
      />

      <h3 className="mt-6 font-poppins text-xl font-bold leading-tight">{testimonial.name}</h3>
      <p className="mt-1 font-satoshi text-base text-[#003be2]">{testimonial.role}</p>

      <blockquote className="mt-7 font-satoshi text-lg leading-[1.6] text-[#606060]">
        &quot;{testimonial.quote}&quot;
      </blockquote>
    </article>
  );
};

export default TestimonialCard;