type Props = {
  pkg: string;
};

const NixStorePath = ({ pkg }: Props) => {
  return (
    <div className="not-prose rounded-lg bg-pale dark:bg-black border-2 border-light-gray dark:border-gray py-3 px-5">
      <div className="space-y-2 md:space-y-3 lg:space-y-4">
        <pre className="overflow-auto text-lg md:text-xl lg:text-2xl xl:text-3xl flex">
          <div className="flex flex-col md:space-y-1 lg:space-y-1.5">
            <span className="text-lilac dark:text-cerulean font-mono">
              /nix/store/
            </span>
            <span className="font-sans tracking-tight text-sm md:text-normal lg:text-lg">
              <strong>1.</strong> Root path
            </span>
          </div>
          <div className="flex flex-col md:space-y-1.5 lg:space-y-1.5">
            <span className="text-blue dark:text-lilac font-light font-mono">
              sglc12hc6pc68w5ppn2k56n6jcpaci16
            </span>
            <span className="font-sans tracking-tight text-sm md:text-normal lg:text-lg">
              <strong>2.</strong> Input hash
            </span>
          </div>
          <span>-</span>
          <div className="flex flex-col md:space-y-1.5 lg:space-y-1.5">
            <span className="text-orange dark:text-rose font-mono">{pkg}</span>
            <span className="font-sans tracking-tight text-sm md:text-normal lg:text-lg">
              <strong>3.</strong> Package name
            </span>
          </div>
        </pre>
      </div>
    </div>
  );
};

export default NixStorePath;
