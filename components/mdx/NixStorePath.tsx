type Props = {
  pkg: string;
};

const NixStorePath = ({ pkg }: Props) => {
  return (
    <div className="bg-black rounded-lg p-4">
      <code className="text-xl">
        <span className="text-blue-500">/nix/store/</span>
        <span className="text-pink-500">some-long-hash</span>
        <span className="text-slate-200">-</span>
        <span className="text-teal-500">{pkg}</span>
      </code>
    </div>
  );
};

export default NixStorePath;
