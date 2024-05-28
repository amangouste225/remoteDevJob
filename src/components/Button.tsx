type ButtonProps = {
  children: React.ReactNode;
  type: "recent" | "relevant";
};

export default function Button({ children, type }: ButtonProps) {
  return (
    <button
      className={`uppercase font-semibold ${
        type === "relevant" && "bg-red-800 text-white"
      } ${
        type === "recent" && "bg-slate-200 text-black"
      }  py-1 px-3 text-[12px] rounded-sm`}
    >
      {children}
    </button>
  );
}
