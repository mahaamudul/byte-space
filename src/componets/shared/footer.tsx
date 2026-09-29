import Image from "next/image";
import Link from "next/link";
import ActionButton from "../ui/ActionButton";
import InputField from "../ui/InputField";

const footerColumns = [
  {
    links: ["Featured Courses", "Featured Categories", "Business", "IT", "Design"],
  },
  {
    links: ["Development", "Marketing", "Photography", "Finance", "Sport"],
  },
  {
    links: ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white text-[#55565a]">
      <div className="mx-auto max-w-360 px-5 pb-10 pt-16 sm:px-8 lg:pt-20">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <div className="min-w-0">
            <Link href="/" className="flex items-center gap-2" aria-label="ByteSpace home">
              <Image
                src="/assets/nav/logo%20.png"
                alt=""
                width={42}
                height={42}
                className="size-10 object-contain"
              />
              <span className="font-poppins text-xl font-bold tracking-[-0.04em] text-[#17181b]">
                ByteSpace
              </span>
            </Link>
            <p className="mt-6 max-w-[560px] font-satoshi text-sm leading-6">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            <form className="mt-12 flex max-w-[720px] items-center gap-5">
              <InputField
                type="email"
                label="Email address"
                placeholder="Enter your email"
                required
                wrapperClassName="h-[50px] flex-1 rounded-full border-2 border-[#dedfe1] px-7 font-satoshi text-sm"
                className="text-[#3d3e42] placeholder:text-[#4d4e52]"
              />
              <ActionButton
                type="submit"
                className="h-[50px] px-8 text-base text-[#151820]"
              >
                Search
              </ActionButton>
            </form>

            <p className="mt-7 max-w-[560px] font-satoshi text-xs leading-5">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 lg:pt-14">
            {footerColumns.map((column) => (
              <nav key={column.links[0]} aria-label={column.links[0]}>
                <ul className="space-y-6 font-satoshi text-sm leading-5">
                  {column.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="transition-colors hover:text-[#003be2]">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-28 flex flex-col gap-6 border-t-2 border-[#e5e5e5] pt-8 font-satoshi text-sm md:flex-row md:items-center md:justify-between">
          <p>@ 2023 ByteSpace. All rights reserved.</p>
          <nav aria-label="Legal" className="flex flex-wrap gap-8">
            <a href="#privacy" className="hover:text-[#003be2]">Privacy Policy</a>
            <a href="#terms" className="hover:text-[#003be2]">Terms of Service</a>
            <a href="#cookies" className="hover:text-[#003be2]">Cookies Settings</a>
          </nav>
        </div>
      </div>
    </footer>
  );
}
