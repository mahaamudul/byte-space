import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "#courses" },
  { label: "Creators", href: "#creators" },
];

export default function Nav() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex h-[72px] max-w-360 items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2.5"
          aria-label="ByteSpace home"
        >
          <Image
            src="/assets/nav/logo .png"
            alt=""
            width={24}
            height={24}
            className="size-6 object-contain"
            priority
          />
          <span className="font-clash-display text-base font-semibold tracking-[-0.03em] text-white sm:text-lg">
            ByteSpace
          </span>
        </Link>

        <div className="hidden items-center gap-8 text-[13px] font-medium text-white/80 md:flex">
          {links.map((link) => (
            <a key={link.label} href={link.href} className="transition-colors hover:text-white">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5 text-[11px] font-medium text-white">
          <a href="#sign-in" className="hidden transition-colors hover:text-white/70 sm:block">
            Sign In
          </a>
          <a href="#join-us" className="transition-colors hover:text-white/70">
            Join Us
          </a>
          <a
            href="#cart"
            aria-label="Shopping cart"
            className="transition-opacity hover:opacity-70"
          >
            <Image
              src="/assets/nav/nav-cart.png"
              alt=""
              width={16}
              height={16}
              className="size-4 object-contain brightness-0 invert"
            />
          </a>
        </div>
      </nav>
    </header>
  );
}