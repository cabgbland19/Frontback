<template>
  <v-textarea :label="label" rounded outlined :rules="rules" />
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
  },
};
</script>

<style></style>
