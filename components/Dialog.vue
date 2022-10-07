<template>
  <v-dialog v-model="isDialog" persistent max-width="2000px">
    <v-card>
      <!-- <v-card-title>
          <span class="text-h5">User Profile</span>
        </v-card-title> -->
      <v-card-text class="pa-0">
        <Form nameForm="manage" />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
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

  watch: {
    isDialog(val) {
      this.localIsDialog = val;
    },
    localIsDialog(val) {
      this.$emit("update:isDialog", val);
    },
  },

  computed: {
    ...mapState("app", ["isDialog"]),
  },
};
</script>
