import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function ResultsTabs({ children }: Props) {
  return (
    <div className="w-[45%] bg-white p-0 overflow-y-scroll relative">
      {children}
    </div>
  );
}
