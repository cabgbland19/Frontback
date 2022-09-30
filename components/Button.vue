<template>
  <v-btn
    color="primary"
    :outlined="outlined"
    rounded
    @click="type !== 'submit' && action()"
    :type="type"
    :disabled="disabled"
    >{{ label }}</v-btn
  >
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: "label",
    },
    action: {
      type: Function,
      default: () => null,
    },
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style></style>
