import posthog from "posthog-js";
import { useState } from "react";

type Reaction = "positive" | "negative";
type Step = "prompt" | "feedback" | "thankyou";

const PageSurvey = () => {
  const [reaction, setReaction] = useState<Reaction>();
  const [feedback, setFeedback] = useState<string>();
  const [step, setStep] = useState<Step>("prompt");

  const nextStep = () => {
    if (step === "prompt") {
      setStep("feedback");
    }

    if (step === "feedback") {
      setStep("thankyou");
    }
  };

  const submitResponse = (reaction: Reaction) => {
    setReaction(reaction);
    posthog.capture("page_review", { reaction });
    nextStep();
  };

  const submitFeedback = () => {
    const trimmed = feedback?.trim();

    posthog.capture("page_feedback", {
      reaction,
      feedback: trimmed,
    });

    nextStep();
  };

  return (
    <div className="space-y-4">
      {step === "prompt" && (
        <>
          <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
            Was this page helpful?
          </h3>
          <div className="flex items-center space-x-2">
            <button
              className="border-1.5 border-light-gray hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray flex items-center justify-between space-x-3 rounded-lg px-3 py-2 text-sm font-semibold tracking-tight hover:shadow-sm md:text-base"
              onClick={() => submitResponse("positive")}
            >
              <span>Yes</span>
              <span>👍</span>
            </button>

            <button
              className="border-1.5 border-light-gray hover:border-primary hover:bg-pale dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray flex items-center justify-between space-x-3 rounded-lg px-3 py-2 text-sm font-semibold tracking-tight hover:shadow-sm md:text-base"
              onClick={() => submitResponse("negative")}
            >
              <span>No</span>
              <span>👎</span>
            </button>
          </div>
        </>
      )}

      {step === "feedback" && (
        <>
          <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
            {reaction === "positive"
              ? "What made this page great?"
              : "How can we improve?"}
          </h3>

          <textarea
            className="border-1.5 border-soft-gray dark:border-gray dark:bg-dark w-full resize-none rounded-lg p-3 text-sm shadow-sm md:p-4 md:text-base lg:p-2.5"
            cols={25}
            rows={5}
            value={feedback}
            onChange={(e) => setFeedback(e.target.value)}
            placeholder={
              reaction === "positive"
                ? "Let us know what you found helpful"
                : "Let us know how we can do better"
            }
            autoFocus
          />

          {feedback && (
            <button
              className="hoverName:text-pale bg-light-gray text-dark hover:bg-gray active:bg-rose dark:bg-gray dark:text-pale dark:hover:bg-dark-gray rounded-lg px-3 py-2 font-semibold hover:cursor-pointer"
              onClick={submitFeedback}
            >
              Send feedback
            </button>
          )}
        </>
      )}

      {step === "thankyou" && (
        <h3 className="text-lg font-semibold md:text-xl lg:text-2xl">
          Thank you for sharing!
        </h3>
      )}
    </div>
  );
};

export default PageSurvey;
