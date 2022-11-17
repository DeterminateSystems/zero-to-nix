import { createHash } from "crypto";

type Props = {
  pkg: string;
};

const NixStorePath = ({ pkg }: Props) => {
  return (
    <div className="not-prose rounded-lg border-2 border-slate-300 dark:border-slate-500 py-3 px-5">
      <div className="space-y-2 md:space-y-3 lg:space-y-4">
        <pre className="overflow-auto text-lg md:text-xl lg:text-2xl xl:text-3xl flex">
          <div className="flex flex-col space-y-1.5">
            <span className="text-blue-700 dark:text-sky-500 font-semibold font-mono">
              /nix/store/
            </span>
            <span className="font-sans text-sm md:text-normal lg:text-lg">
              Root path
            </span>
          </div>
          <div className="flex flex-col space-y-1.5">
            <span className="text-slate-400 dark:text-slate-400 font-light font-mono">
              sglc12hc6pc68w5ppn2k56n6jcpaci16
            </span>
            <span className="font-sans text-sm md:text-normal lg:text-lg">
              Input hash
            </span>
          </div>
          <span>-</span>
          <div className="flex flex-col space-y-1.5">
            <span className="text-rose-700 dark:text-rose-500 font-mono">
              {pkg}
            </span>
            <span className="font-sans text-sm md:text-normal lg:text-lg">
              Package name
            </span>
          </div>
        </pre>
      </div>
    </div>
  );
};

export default NixStorePath;
