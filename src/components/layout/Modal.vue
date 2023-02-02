<template>
  <Dialog
    :open="modalIsOpen"
    @close="closeModal"
    class="relative z-50 text-dark dark:text-dark"
  >
    <div class="fixed inset-0 bg-black/40" aria-hidden="true" />

    <div class="fixed inset-0 flex items-center justify-center">
      <DialogPanel
        class="flex w-full max-w-sm flex-col space-y-6 rounded-lg bg-pale py-4 px-6"
      >
        <div id="mc_embed_signup">
          <form
            action="https://systems.us21.list-manage.com/subscribe/post?u=219191dcbd71bd0a5da006aed&amp;id=da3f9b6422&amp;f_id=00a5e7e1f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div id="mc_embed_signup_scroll">
              <h2>
                Sign up for the
                <span class="text-primary">Determinate Systems</span> mailing
                list
              </h2>
              <div class="indicates-required">
                <span class="asterisk">*</span> indicates required
              </div>
              <div class="mc-field-group">
                <label for="mce-FNAME">First Name</label>
                <input
                  type="text"
                  value=""
                  name="FNAME"
                  class=""
                  id="mce-FNAME"
                />
                <span id="mce-FNAME-HELPERTEXT" class="helper_text"></span>
              </div>
              <div class="mc-field-group">
                <label for="mce-LNAME">Last Name</label>
                <input
                  type="text"
                  value=""
                  name="LNAME"
                  class=""
                  id="mce-LNAME"
                />
                <span id="mce-LNAME-HELPERTEXT" class="helper_text"></span>
              </div>
              <div class="mc-field-group">
                <label for="mce-EMAIL">
                  Email Address <span class="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  class="required email"
                  id="mce-EMAIL"
                  required
                />
                <span id="mce-EMAIL-HELPERTEXT" class="helper_text"></span>
              </div>
              <div hidden="true">
                <input type="hidden" name="tags" value="294155,290793" />
              </div>
              <div id="mce-responses" class="clear">
                <div
                  class="response"
                  id="mce-error-response"
                  style="display: none"
                ></div>
                <div
                  class="response"
                  id="mce-success-response"
                  style="display: none"
                ></div>
              </div>

              <div style="position: absolute; left: -5000px" aria-hidden="true">
                <input
                  type="text"
                  name="b_219191dcbd71bd0a5da006aed_da3f9b6422"
                  tabindex="-1"
                  value=""
                />
              </div>
              <div class="clear">
                <input
                  type="submit"
                  value="Subscribe"
                  name="subscribe"
                  id="mc-embedded-subscribe"
                  class="button !bg-light-gray text-lg !font-bold !text-dark hover:!bg-primary hover:!text-white"
                />
              </div>
            </div>
          </form>
        </div>
      </DialogPanel>
    </div>
  </Dialog>
</template>

<script setup lang="ts">
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

import { closeModal, modalIsOpen } from "~/logic/state";

const subscribe = () => {
  alert("Subscribed!");
};
</script>
