<template>
  <div class="flex items-center justify-between">
    <div class="space-y-4">
      <p class="text-lg font-semibold md:text-xl lg:text-2xl">
        This page on GitHub
      </p>

      <div class="flex items-center space-x-2">
        <a
          :href="sourceUrl"
          class="flex items-center space-x-2 rounded-lg border-2 py-2 px-3 dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray"
        >
          <span><IconFaGithub /></span>
          <span>Source</span>
        </a>

        <a
          :href="editUrl"
          class="flex items-center space-x-2 rounded-lg border-2 py-2 px-3 dark:border-gray dark:hover:border-primary dark:hover:bg-darker-gray"
        >
          <span><IconFaGithub /></span>
          <span>Edit</span>
        </a>
      </div>
    </div>

    <PageSurvey />
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
