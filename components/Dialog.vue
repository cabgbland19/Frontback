<template>
  <v-dialog v-model="localIsDialog" persistent max-width="511px">
    <v-card rounded="xl">
      <v-card-title class="mb-2">
        <span class="text-h5"
          >{{ userItem.id ? "Editar" : "Nuevo" }} usuario</span
        >
      </v-card-title>
      <v-card-text>
        <Form nameForm="user" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { propertiesGenerator } from "~/plugins/helpers";
import { VModelUserInterface } from "~/interfaces/user.interface";

import { mapState } from "vuex";

export default {
  // props: {
  //   isDialog: {
  //     type: Boolean,
  //     default: false,
  //   },
  // },

  data: () => ({
    localIsDialog: false,
  }),
  computed: {
    ...mapState("app", ["isDialog"]),

    ...propertiesGenerator([...VModelUserInterface], {
      path: "user.store",
      mut: "user.store/setProperty",
    }),
  },

  created() {
    // $nuxt.$on("changeDialog", (val) => {
    //   this.localIsDialog = val;
    // });
    // this.isDialog = true;
  },

  watch: {
    isDialog(val) {
      this.localIsDialog = val;
    },
    // localIsDialog(val) {
    //   this.$emit("update:isDialog", val);
    // },
  },
};
</script>
