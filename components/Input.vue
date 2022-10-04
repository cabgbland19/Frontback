<template>
  <v-text-field
    v-model="localModel"
    rounded
    outlined
    :label="label"
    :readonly="readonly"
    :rules="rules"
    :type="type"
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
    type: {
      type: String,
      default: "text",
    },
    model: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      localModel: this.model,
    };
  },
  watch: {
    model(val) {
      this.localModel = val;
    },
    localModel(val) {
      this.$emit("update:model", val);
    },
  },
};
</script>

<style></style>
