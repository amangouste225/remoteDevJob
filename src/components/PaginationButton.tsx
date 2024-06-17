type Props = {
  onClick: () => void;
  type: number;
  icon: JSX.Element;
  className: string;
};

export default function PaginationButton({
  onClick,
  type,
  icon,
  className,
}: Props) {
  return (
    <button
      onClick={(e) => {
        onClick();
        e.currentTarget.blur();
      }}
      className={`rounded-full bg-gray py-1 text-[12px] px-2 m-3 absolute ${className}`}
    >
      {className === "left-2" ? (
        <>
          <span className="inline-block mr-1 pt-1">{icon}</span>
          <span>Page {type}</span>
        </>
      ) : (
        <>
          Page {type}
          <span className="inline-block ml-1 pt-1">{icon}</span>
        </>
      )}
    </button>
  );
}
