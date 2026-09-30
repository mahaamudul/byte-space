import Image from "next/image";
import Link from "next/link";
import AuthForm from "@/componets/auth/Form";

export default function loginPage() {
  return (
    <main className="grid min-h-screen bg-[#003be2] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:90px_90px] lg:grid-cols-2">
      <section className="relative min-h-screen overflow-hidden bg-[#003be2] bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:90px_90px] text-white">
        <div className="relative z-10 flex h-full w-full flex-col justify-start px-6 pb-8 pt-7 sm:px-10 lg:pl-[10%] lg:pr-8 lg:pt-8">
          <Link href="/" aria-label="ByteSpace home" className="flex items-center gap-2">
            <Image
              src="/assets/nav/logo%20.png"
              alt=""
              width={25}
              height={25}
              className="size-6 object-contain"
            />
            <span className="font-poppins text-xl font-bold tracking-[-0.04em] text-white">
              ByteSpace
            </span>
          </Link>

          <div className="mt-10 max-w-[390px]">
            <h1 className="font-poppins text-lg font-semibold leading-tight">
              Sign up and come in
            </h1>
            <p className="mt-4 font-satoshi text-sm leading-6 text-white/90">
              The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
            </p>
          </div>
        </div>

        <Image
          src="/assets/auth/Group%207.png"
          alt="ByteSpace courses and learning tools"
          width={552}
          height={586}
          priority
          className="absolute bottom-0 left-1/2 z-10 w-[min(92%,432px)] -translate-x-1/2 object-contain lg:bottom-3 lg:left-[8%] lg:translate-x-0"
        />
      </section>

      <section className="flex min-h-[720px] items-center justify-center px-5 py-10 sm:px-8 lg:min-h-screen lg:px-12">
        <AuthForm mode="login" />
      </section>
    </main>
  );
}