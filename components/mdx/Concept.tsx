import { Dialog, Transition } from "@headlessui/react";
import { allConcepts } from "contentlayer/generated";
import Link from "next/link";
import { Fragment, useState } from "react";

type Props = {
  id: string;
  text?: string;
};

const Concept = ({ id, text }: Props) => {
  const finalText = text ?? id;
  const [open, setOpen] = useState<boolean>(false);
  const concept = allConcepts.find((c) => c.id === id)!;
  const { title, path, snippet } = concept;

  return (
    <>
      <button
        className="underline hover:text-blue-500"
        onClick={() => setOpen(true)}
      >
        {finalText}
      </button>

      <div className="hidden">
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
              <div className="fixed inset-0 bg-black bg-opacity-50" />
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
                  <Dialog.Panel className="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <div className="space-y-3">
                      <Dialog.Title as="h3" className="text-lg font-semibold">
                        {title}
                      </Dialog.Title>
                      <Dialog.Description>{snippet}</Dialog.Description>
                    </div>

                    <div className="flex justify-end">
                      <button className="bg-slate-200 py-2 px-3 font-semibold rounded-lg hover:bg-slate-300 text-sm shadow">
                        <Link href={path}>Read more</Link>
                      </button>
                      <button
                        onClick={() => setOpen(false)}
                        className="bg-slate-200 py-2 px-3 font-semibold rounded-lg hover:bg-slate-300 text-sm shadow"
                      >
                        Close
                      </button>
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

export default Concept;
