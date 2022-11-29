<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th>Name</th>
        <th>Meaning</th>
        <th>Examples</th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="({ name, description, examples }, idx) in gitAttributes"
        :key="idx"
      >
        <td>
          <code>{{ name }}</code>
        </td>
        <td v-html="md(description)" />
        <td>
          <div class="flex flex-col">
            <span v-for="(example, idx) in examples" :key="idx">
              <code>{{ example }}</code>
            </span>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup lang="ts">
import { flakes } from "~/concepts";
import { md } from "~/logic/content";

const { gitAttributes } = flakes;
</script>
