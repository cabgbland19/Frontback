<template>
  <v-text-field
    rounded
    outlined
    :label="label"
    :readonly="readonly"
    :rules="rules"
  />
</template>

<script>
export default {
  props: {
    label: {
      type: String,
      default: "label",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    rules: {
      type: Array,
      default: () => [],
    },
  },
};
</script>

<style></style>
