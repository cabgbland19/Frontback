<template>
  <v-dialog v-model="isDialog" persistent max-width="511px">
    <v-card rounded="xl">
      <v-card-title class="mb-2">
        <span class="text-h5">Editar usuario</span>
      </v-card-title>
      <v-card-text>
        <Form nameForm="user" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
// import { mapState } from "vuex";

export default {
  // props: {
  //   isDialog: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },

  data: () => ({
    isDialog: false,
  }),

  created() {
    $nuxt.$on("changeDialog", (val) => {
      this.isDialog = val;
    });
  },

  // watch: {
  //   isDialog(val) {
  //     this.localIsDialog = val;
  //   },
  //   localIsDialog(val) {
  //     this.$emit("update:isDialog", val);
  //   },
  // },

  // computed: {
  //   ...mapState("app", ["isDialog"]),
  // },
};
</script>
