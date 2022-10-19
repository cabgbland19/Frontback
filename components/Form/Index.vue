<template>
  <div>
    <FormLogin v-if="nameForm === 'login'" />
    <FormManage v-if="nameForm === 'manage'" />
    <FormUser v-if="nameForm === 'user'" />
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
