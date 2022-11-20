import { useState } from "react";

import { ConceptPanel } from "./FlakeReferences";

type Config = {
  name: string;
  description: string;
  type: "string" | "attribute-set";
};

const configs: Config[] = [
  {
    name: "description",
    description: "An optional description for the flake",
    type: "string",
  },
  {
    name: "inputs",
    description: "The flake's inputs (the code the flake relies on)",
    type: "attribute-set",
  },
  {
    name: "nixConfig",
    description: "The Nix configuration for the flake",
    type: "attribute-set",
  },
  {
    name: "outputs",
    description: "The outputs produced by the flake",
    type: "attribute-set",
  },
];

const ConfigElement = ({ name, description, type }: Config) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="ml-6">
      <pre>
        <code>
          {'"'}
          {name}
          {'"'}
        </code>
        :{" "}
        <div className="ml-4 flex items-center space-x-4">
          {type === "string" && (
            <span className="rounded bg-blue py-1 px-2 text-sm font-semibold text-white">
              string
            </span>
          )}
          {type === "attribute-set" && (
            <span className="rounded bg-lilac py-1 px-2 text-sm font-semibold text-white">
              attribute set
            </span>
          )}
          <span>{description}</span>
        </div>
      </pre>
    </div>
  );
};

const FlakeFileStructure = () => {
  return (
    <ConceptPanel>
      <p>{"{"}</p>
      {configs.map((config: Config) => (
        <ConfigElement {...config} />
      ))}
      <p>{"}"}</p>
    </ConceptPanel>
  );
};

export default FlakeFileStructure;
