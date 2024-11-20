import { posthog } from "posthog-js";
import { useEffect, useState } from "react";

const CookieConsent = () => {
  const [show, setShow] = useState<boolean>(false);
  const [optionSelected, setOptionSelected] = useState<boolean>(false);

  useEffect(() => {
    posthog.init("phc_qZk1aHPpXUq0ohRcTjFL5w8Tpo5Asht9UhFBjzruBFD", {
      api_host: "https://app.posthog.com",
    });

    const posthogKnowsPreference =
      posthog.has_opted_out_capturing() || posthog.has_opted_in_capturing();

    const hideCookieConsent = posthogKnowsPreference || optionSelected;

    if (!hideCookieConsent) {
      setShow(true);
    }
  });

  const acceptCookies = () => {
    posthog.opt_in_capturing();
    setShow(false);
    setOptionSelected(true);
  };

  const declineCookies = () => {
    posthog.opt_out_capturing();
    setShow(false);
    setOptionSelected(true);
  };

  return (
    <>
      {show && (
        <div className="fixed bottom-6 left-6 z-50 print:hidden">
          <div className="max-w-[225px] bg-soft-gray shadow-lg dark:text-dark">
            <p className="content m-0 px-6 py-4 text-[16px]">
              We use a single, first-party analytics cookie to focus our limited
              time and energy on the most important documentation. Check out our
              <a
                href="https://determinate.systems/policies/privacy"
                className="underline"
                target="_blank"
              >
                privacy policy
              </a>
              .
            </p>
            <div className="grid grid-cols-2 divide-x-1.5 divide-light-gray border-t-1.5 border-light-gray">
              <button
                className="py-2.5 font-bold hover:bg-green hover:text-dark"
                onClick={acceptCookies}
              >
                Accept
              </button>
              <button
                className="py-2.5 font-bold hover:bg-red hover:text-white"
                onClick={declineCookies}
              >
                Decline
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
