import Image from "next/image";
import ActionButton from "../ui/ActionButton";

const UnlockSection = () => {
  return (
    <section className="relative min-h-[488px] overflow-hidden bg-[#003be2] text-white">
      <Image
        src="/assets/unlock%20section/Group%206.png"
        alt=""
        fill
        sizes="100vw"
        className="object-cover"
        priority
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:90px_90px]"
      />

      <div className="relative z-10 mx-auto flex min-h-[488px] max-w-360 flex-col items-center justify-center px-5 text-center sm:px-8">
        <h2 className="max-w-[650px] font-poppins text-4xl font-bold leading-[1.08] tracking-[-0.04em] sm:text-5xl">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>
        <p className="mt-10 max-w-[980px] font-satoshi text-sm leading-7 text-white/95 sm:text-base">
          Experience the collaboration of numerous creators and an expanding selection of courses. Register now and become a part of a community comprising over 10,000 local and international creators. Utilize our Course Editor, and showcase your expertise by publishing your finest course on the ByteSpace Course Library.
        </p>
        <ActionButton className="mt-10 px-7 py-3 text-sm">
          Join as Creator
        </ActionButton>
      </div>
    </section>
  );
};

export default UnlockSection;