import React from "react";

type InputProps = {
  value: string;
  set: React.Dispatch<React.SetStateAction<number>>;
};

const InputRange = ({ value, set }: InputProps) => {
  return (
    <>
      <div className="flex gap-4 ">
        <p className="w-4 text-right text-xl font-bold">{value}</p>
        <input
          className="z-10 ml-5"
          type="range"
          min={-180}
          max={180}
          value={value}
          onChange={(e) => {
            set(parseFloat(e.target.value) || 0);
          }}
        />
      </div>
    </>
  );
};

export default InputRange;
