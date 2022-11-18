type Props = {
  pkg: string;
};

const NixStorePath = ({ pkg }: Props) => {
  return (
    <div className="not-prose rounded-lg border-2 border-light-gray bg-pale py-3 px-5 dark:border-gray dark:bg-black">
      <div className="space-y-2 md:space-y-3 lg:space-y-4">
        <pre className="flex overflow-auto text-lg md:text-xl lg:text-2xl xl:text-3xl">
          <div className="flex flex-col md:space-y-1 lg:space-y-1.5">
            <span className="font-mono text-lilac dark:text-cerulean">
              /nix/store/
            </span>
            <span className="md:text-normal font-sans text-sm tracking-tight lg:text-lg">
              <strong>1.</strong> Root path
            </span>
          </div>
          <div className="flex flex-col md:space-y-1.5 lg:space-y-1.5">
            <span className="font-mono font-light text-blue dark:text-lilac">
              sglc12hc6pc68w5ppn2k56n6jcpaci16
            </span>
            <span className="md:text-normal font-sans text-sm tracking-tight lg:text-lg">
              <strong>2.</strong> Input hash
            </span>
          </div>
          <span>-</span>
          <div className="flex flex-col md:space-y-1.5 lg:space-y-1.5">
            <span className="font-mono text-orange dark:text-rose">{pkg}</span>
            <span className="md:text-normal font-sans text-sm tracking-tight lg:text-lg">
              <strong>3.</strong> Package name
            </span>
          </div>
        </pre>
      </div>
    </div>
  );
};

export default NixStorePath;
