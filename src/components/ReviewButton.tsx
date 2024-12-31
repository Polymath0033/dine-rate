import * as React from "react";
import { ReviewButtonProps } from "../types/review";

export const ReviewButton: React.FC<ReviewButtonProps> = ({
  label,
  isActive = false,
}) => {
  const baseClasses =
    "flex flex-col justify-center items-center self-stretch px-12 py-6 my-auto rounded-3xl border border-solid border-stone-500 min-h-[70px] max-md:px-5";
  const activeClasses = isActive ? "text-white bg-zinc-700" : "bg-white";

  return (
    <button
      className={`${baseClasses} ${activeClasses}`}
      role="button"
      tabIndex={0}
      type="button"
    >
      <div className="flex gap-4 items-center self-stretch">{label}</div>
    </button>
  );
};
