import { Dialog, Tab, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

import { snippets } from "../pages/concepts/snippets";

type Props = {
  id: string;
  show?: string;
};

const Snippet = ({ id, show }: Props) => {
  const finalText = show ?? id;
  const [open, setOpen] = useState<boolean>(false);
  const snippet = snippets.find((s) => s.id === id)!;

  const { title, text } = snippet;

  const url = `/concepts/${id}`;

  return (
    <>
      <button
        aria-label={`Open modal describing the ${snippet.title} concept`}
        className="inline-block font-semibold underline decoration-dotted hover:text-primary"
        onClick={() => setOpen(true)}
      >
        {finalText}
      </button>

      <div className="hidden not-prose">
        <Transition appear show={open}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setOpen(false)}
          >
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-50 dark:bg-opacity-70" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white dark:bg-white p-6 text-left align-middle transition-all">
                    <div>
                      <Dialog.Title
                        as="h3"
                        className="text-lg font-semibold dark:text-black"
                      >
                        {title}
                      </Dialog.Title>
                      <Dialog.Description as="div" className="pt-4 pb-6">
                        <div className="prose max-w-none">{text}</div>
                      </Dialog.Description>
                      <Tab.Group>
                        <Tab.List className="text-right space-x-2">
                          <Tab>
                            <a
                              href={url}
                              className="py-2 px-3 text-sm font-semibold rounded-lg dark:text-black bg-soft-gray hover:bg-primary hover:text-white dark:hover:text-white"
                            >
                              Read more
                            </a>
                          </Tab>
                          <Tab>
                            <button
                              aria-label="Close the currently open modal dialog"
                              onClick={() => setOpen(false)}
                              className="py-2 px-3 text-sm font-semibold rounded-lg dark:text-black bg-soft-gray hover:bg-primary hover:text-white dark:hover:text-white"
                            >
                              Close
                            </button>
                          </Tab>
                        </Tab.List>
                      </Tab.Group>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};

export default Snippet;
