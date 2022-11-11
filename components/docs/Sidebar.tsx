import { allDocs } from "contentlayer/generated";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-1/3">
      <div className="border-2 rounded-lg p-6">
        <ul>
          {allDocs.map((d) => (
            <li key={d._id}>
              <Link href={d.path} className="text-xl hover:text-blue-500">
                {d.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
