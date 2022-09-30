<template>
  <v-btn color="primary" :outlined="outlined" rounded @click="action()">{{
    label
  }}</v-btn>
</template>

<script>
export default {
  props: {
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
  },
};
</script>

<style></style>
