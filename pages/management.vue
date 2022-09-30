<template>
  <v-row>
    <!-- <v-col cols="12" class="primary d-flex justify-center">
      <h1 v-text="viewTitle" class="white--text mt-3" />
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <div class="text-center">
        <v-card
          width="350"
          height="350"
          class="rounded-circle d-flex flex-row justify-center align-center mt-12 mb-15"
        >
          <h1 v-text="items.length" class="primary--text display-3" />
        </v-card>

        <Button label="Gestionar" :action="manage" />
        <Button label="Cancelar" :outlined="true" :action="cancel" />
      </div>
    </v-col> -->
    <v-col cols="4"> </v-col>
    <v-col cols="8">
      <Form />
    </v-col>
  </v-row>
</template>

<script>
export default {
  layout: "empty",

  data() {
    return {
      viewTitle: "Gestion base de datos",
      items: [],
    };
  },
  methods: {
    manage() {
      console.log("Gestionar");
    },
    cancel() {
      console.log("Cancelar");
    },
  },
};
</script>

<style>
.v-sheet.v-card:not(.v-sheet--outlined) {
  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 5px 3px 0px rgb(17 120 100),
    0px 1px 5px 0px rgb(0 0 0 / 12%);
}
</style>
