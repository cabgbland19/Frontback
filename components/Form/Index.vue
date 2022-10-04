<template>
  <div>
    <FormLogin v-if="nameForm === 'login'" />
    <FormManage v-if="nameForm === 'manage'" />
  </div>
</template>

<script>
export default {
  props: {
    nameForm: {
      type: String,
      default: "login",
    },
  },
};
</script>

<style></style>
