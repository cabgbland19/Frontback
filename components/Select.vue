<template>
  <v-select :label="label" rounded outlined :rules="rules" :items="items" />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
    rules: {
      type: Array,
      default: () => [],
    },
    items: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
