<template>
  <v-btn
    :color="color"
    :outlined="outlined"
    rounded
    @click="type !== 'submit' && action()"
    :type="type"
    :icon="isIcon"
    :disabled="disabled"
  >
    <template v-if="isIcon">
      <v-icon v-text="iconText" />
    </template>
    <template v-else>
      {{ label }}
    </template>
  </v-btn>
</template>

<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    isIcon: {
      type: Boolean,
      default: false,
    },
    outlined: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: null,
    },
    action: {
      type: Function,
      default: () => null,
    },
    type: {
      type: String,
      default: "button",
    },
    iconText: {
      type: String,
      default: "button",
    },
    color: {
      type: String,
      default: "primary",
    },
  },
};
</script>

<style></style>
