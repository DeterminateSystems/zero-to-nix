import { allSteps, Step } from "contentlayer/generated";
import Link from "next/link";

type Props = {
  weight: number;
};

const Pagination = ({ weight }: Props) => {
  const next: Step | undefined = allSteps.find((s) => s.weight === weight + 1);
  const previous: Step | undefined = allSteps.find(
    (s) => s.weight === weight - 1
  );

  return (
    <>
      {(previous || next) && (
        <div className="mt-12 px-6 py-4">
          <div className="container mx-auto">
            <div className="md:flex justify-between items-center">
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
          </div>
        </div>
      )}
    </>
  );
};

export default Pagination;
