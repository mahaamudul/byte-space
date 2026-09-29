import Image from "next/image";
import TestimonialCard, { type Testimonial } from "../ui/TestimonialCard";

const testimonials: Testimonial[] = [
  {
    name: "Sarah M.",
    role: "Enthusiastic Learner",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=160&q=80",
    quote: "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
  },
  {
    name: "James L.",
    role: "Lifelong Learner",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=160&q=80",
    quote: "I've tried several online learning platforms, and ByteSpace stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.",
  },
  {
    name: "Alex B.",
    role: "Inspired Creator",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=160&q=80",
    quote: "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#fcfcff] py-20 lg:py-24">
      <div className="pointer-events-none absolute inset-0 select-none" aria-hidden="true">
        <Image
          src="/assets/testimonials/Ellipse%2012.png"
          alt=""
          width={752}
          height={574}
          className="absolute left-[18%] top-0 w-[min(52vw,752px)] max-w-none"
        />
        <Image
          src="/assets/testimonials/Ellipse%2011.png"
          alt=""
          width={638}
          height={784}
          className="absolute right-0 top-0 w-[min(45vw,638px)] max-w-none"
        />
        <Image
          src="/assets/testimonials/Ellipse%208.png"
          alt=""
          width={735}
          height={675}
          className="absolute bottom-0 left-0 w-[min(52vw,735px)] max-w-none"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-360 px-5 sm:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-[530px] font-poppins text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#080808] sm:text-5xl">
            Discover What Our
            <br />
            Community Is Saying
          </h2>
          <p className="max-w-[560px] font-satoshi text-base leading-7 text-[#626262]">
            At ByteSpace, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-3 lg:gap-10">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}