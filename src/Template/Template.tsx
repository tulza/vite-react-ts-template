import { Fragment, useState } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import InputRange from "./InputRange";

const Template = () => {
  const [rotate, setRotate] = useState<number>(0);
  const [x, setx] = useState<number>(0);
  const [y, sety] = useState<number>(0);
  const [enbRandom, setEnbRandom] = useState(false);

  const HandleRandom = () => {
    const chaos: number = 1500;
    setRotate(Math.round(Math.random() * 2 * chaos - chaos));
    setx(Math.round(Math.random() * 2 * chaos - chaos));
    sety(Math.round(Math.random() * 2 * chaos - chaos));
  };

  // randomised pos and rotation of :3
  const timeoutId = (() => {
    if (!enbRandom) return;
    setTimeout(() => {
      HandleRandom();
    }, 100);
  })();

  return (
    <div className="grid flex-col justify-center gap-4">
      <motion.div
        animate={{
          rotate,
          x,
          y,
        }}
        className="radical-limination-circle flex aspect-square w-[200px] items-center justify-center rounded-full p-8 text-white outline-dashed outline-white"
      >
        <h1 className="text-5xl">:3</h1>
      </motion.div>
      <InputRange value={String(rotate)} set={setRotate} />
      <InputRange value={String(x)} set={setx} />
      <InputRange value={String(y)} set={sety} />
      <button
        className="bg-gray inline-block rounded px-4 py-2"
        onClick={() => {
          setRotate(0);
          setx(0);
          sety(0);
        }}
      >
        Reset
      </button>
      <button
        className="bg-gray inline-block rounded px-4 py-2"
        onClick={() => {
          HandleRandom();
        }}
      >
        Random
      </button>
      <button
        className={clsx(
          " inline-block rounded px-4 py-2",
          enbRandom ? "bg-gray" : "bg-red-500",
        )}
        onClick={() => {
          setEnbRandom(!enbRandom);
        }}
      >
        Enable random {enbRandom ? "On" : "Off"}
      </button>
    </div>
  );
};

export default Template;
