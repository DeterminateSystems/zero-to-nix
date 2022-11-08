import { Doc } from "contentlayer/generated";
import Link from "next/link";

type Props = {
  previous?: Doc;
  next?: Doc;
};

const Pagination = ({ previous, next }: Props) => {
  return (
    <>
      {(previous || next) && (
        <div className="inline-flex justify-between items-center">
          <div>
            {previous && (
              <>
                <span className="mr-2">Previous:</span>
                <Link
                  href={previous.path}
                  className="font-semibold hover:text-blue-500"
                >
                  {previous.title}
                </Link>
              </>
            )}
          </div>

          <div>
            {next && (
              <>
                <span className="mr-2">Next:</span>
                <Link
                  href={next.path}
                  className="font-semibold hover:text-blue-500"
                >
                  {next.title}
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
