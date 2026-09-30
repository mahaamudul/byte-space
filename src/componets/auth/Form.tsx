import Link from "next/link";

type FormMode = "login" | "register";

type FormProps = {
	mode: FormMode;
};

const fieldClassName = "mt-2 h-10 w-full rounded-lg border border-[#dedfe2] px-4 text-sm outline-none transition-colors focus:border-[#003be2] placeholder:text-[#9a9ca3]";

export default function AuthForm({ mode }: FormProps) {
	const isRegister = mode === "register";

	return (
		<div className="w-full max-w-[480px] rounded-[24px] bg-white px-6 py-12 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:px-12">
			<p className="font-satoshi text-sm text-[#003be2]">
				{isRegister ? "Create an Account" : "Welcome Back"}
			</p>
			<h1 className="mt-2 max-w-[320px] font-poppins text-4xl font-bold leading-[1.08] tracking-[-0.04em] text-[#2b2c30]">
				{isRegister ? (
					<>
						Welcome to
						<br />
						ByteSpace
					</>
				) : (
					<>
						Welcome back to
						<br />
						ByteSpace
					</>
				)}
			</h1>

			<form className="mt-9 space-y-4">
				{isRegister && (
					<label className="block font-satoshi text-xs text-[#27282c]">
						Full Name
						<input type="text" placeholder="Jamie Davis" className={fieldClassName} required />
					</label>
				)}
				<label className="block font-satoshi text-xs text-[#27282c]">
					Email
					<input type="email" placeholder="designer@example.com" className={fieldClassName} required />
				</label>
				<label className="block font-satoshi text-xs text-[#27282c]">
					Password
					<input type="password" placeholder="********" className={fieldClassName} required />
				</label>

				<div className="flex justify-end pt-1">
					<button
						type="submit"
						className="rounded-full bg-[#c2f001] px-5 py-2.5 font-satoshi text-sm font-medium text-[#1a1b1d] transition-transform hover:scale-105"
					>
						{isRegister ? "Continue" : "Log in"}
					</button>
				</div>
			</form>

			<p className="mt-24 text-center font-satoshi text-xs text-[#777980]">
				{isRegister ? "Already have an account?" : "Don't have an account?"}{" "}
				<Link href={isRegister ? "/login" : "/register"} className="text-[#003be2] hover:underline">
					{isRegister ? "Login" : "Sign up"}
				</Link>
			</p>
		</div>
	);
}
