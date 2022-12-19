<template>
  <div class="flex items-center justify-between">
    <PageSurvey />

    <div class="space-y-3">
      <span class="flex items-center space-x-3 text-lg">
        <span><IconFaEdit class="text-dark dark:text-light-gray" /></span>
        <a
          :href="editUrl"
          class="tracking-tight text-dark-gray hover:text-primary dark:text-light-gray dark:hover:text-primary"
          target="_blank"
          ref="noopener noreferrer"
        >
          Edit this page
        </a>
      </span>

      <span class="flex items-center space-x-3 text-lg">
        <span><IconFaGithub class="text-dark dark:text-light-gray" /></span>
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
const editUrl = `${githubUrl}/edit/main/${filename}`;
</script>
