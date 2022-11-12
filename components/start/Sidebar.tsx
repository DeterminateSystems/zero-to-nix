import { allSteps } from "contentlayer/generated";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-1/3">
      <div className="border-2 rounded-lg p-6">
        <ul>
          {allSteps.map((s) => (
            <li key={s._id}>
              <Link href={s.path} className="text-xl hover:text-blue-500">
                {s.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
