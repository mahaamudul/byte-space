
type TagButtonProps = {
  label: string;
  active?: boolean;
  variant?: "default" | "more";
};

const TagButton = ({ label, active = false, variant = "default" }: TagButtonProps) => {
  const isMoreButton = variant === "more";

  return (
    <button
      type="button"
      className={`w-fit font-satoshi text-sm font-thin  transition-colors ${
        isMoreButton
          ? "px-2 py-2 text-[#003be2] hover:text-[#002aa4]"
          : `rounded-3xl px-4 py-2 text-gray-800 ${
              active ? "bg-[#c2f001]" : "bg-gray-200 hover:bg-gray-300"
            }`
      }`}
    >
      {label}
    </button>
  );
};

export default TagButton