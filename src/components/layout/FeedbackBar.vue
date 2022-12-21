<template>
  <div class="flex items-center justify-between">
    <PageSurvey />

    <div class="space-y-3 text-sm md:text-base lg:text-lg">
      <span class="flex items-center space-x-3">
        <span>
          <IconFaEdit class="text-dark dark:text-light-gray" />
        </span>
        <a
          :href="editUrl"
          class="tracking-tight text-dark-gray hover:text-primary dark:text-light-gray dark:hover:text-primary"
          target="_blank"
          ref="noopener noreferrer"
        >
          Edit this page
        </a>
      </span>

      <span class="flex items-center space-x-3">
        <span>
          <IconFaGithub class="text-dark dark:text-light-gray" />
        </span>
        <a
          :href="editUrl"
          class="tracking-tight text-dark-gray hover:text-primary dark:text-light-gray dark:hover:text-primary"
          target="_blank"
          ref="noopener noreferrer"
        >
          File an issue
        </a>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import site from "~/site";

const {
  meta: { filename },
} = usePage();

const { githubUrl } = site;

const sourceUrl = `${githubUrl}/tree/main/${filename}`;

const editTitle = `Issue with page \`${filename}\``;
const editBody = `...Replace me with your issue description...`;
const editUrlParams = `title=${editTitle}&body=${editBody}`;
const editUrl = `${githubUrl}/issues/new?${encodeURI(editUrlParams)}`;
</script>

//
https://github.com/PostHog/posthog.com/issues/new?title=Feedback%20on:%20JavaScript&body=**Issue%20with:%20/docs/integrate/client/js/index.mdx**
