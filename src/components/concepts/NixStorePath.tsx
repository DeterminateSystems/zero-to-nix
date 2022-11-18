import { Code, ConceptPanel } from "./Shared";

type Props = {
  pkg: string;
};

const NixStorePath = ({ pkg }: Props) => {
  return (
    <ConceptPanel>
      <pre className="flex overflow-auto text-base md:text-lg lg:text-xl">
        <div className="flex flex-col md:space-y-1 lg:space-y-1.5">
          <span className="font-mono text-lilac dark:text-cerulean">
            /nix/store/
          </span>
          <span className="font-sans text-sm tracking-tight md:text-base lg:text-lg">
            <strong>1.</strong> Root path
          </span>
        </div>
        <div className="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span className="font-mono font-light text-blue dark:text-lilac">
            sglc12hc6pc68w5ppn2k56n6jcpaci16
          </span>
          <span className="font-sans text-sm tracking-tight md:text-base lg:text-lg">
            <strong>2.</strong> Input hash
          </span>
        </div>
        <span>-</span>
        <div className="flex flex-col md:space-y-1.5 lg:space-y-1.5">
          <span className="font-mono text-orange dark:text-rose">{pkg}</span>
          <span className="font-sans text-sm tracking-tight md:text-base lg:text-lg">
            <strong>3.</strong> Package name
          </span>
        </div>
      </pre>
    </ConceptPanel>
  );
};

export default NixStorePath;
