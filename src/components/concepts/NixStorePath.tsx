type Props = {
  pkg: string;
};

const NixStorePath = ({ pkg }: Props) => {
  return (
    <div className="not-prose rounded-lg border-2 border-slate-300 dark:border-slate-500 py-3 px-5">
      <div className="space-y-2 md:space-y-3 lg:space-y-4">
        <pre className="font-mono overflow-auto text-normal md:text-lg lg:text-xl xl:text-2xl">
          <span className="text-blue-700 dark:text-sky-500 font-semibold">
            /nix/store/
          </span>
          <span className="text-slate-400 dark:text-slate-400 font-light">
            sglc12hc6pc68w5ppn2k56n6jcpaci16
          </span>
          <span>-</span>
          <span className="text-rose-700 dark:text-rose-500">{pkg}</span>
        </pre>

        <div className="text-right">
          <div className="space-x-4">
            <span className="text-blue-700 dark:text-sky-500">
              Default Nix store root
            </span>
            <span className="text-slate-400 dark:text-slate-400">
              Hash of the package's inputs
            </span>
            <span className="text-rose-700 dark:text-rose-500">
              User-supplied name of the package
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NixStorePath;
