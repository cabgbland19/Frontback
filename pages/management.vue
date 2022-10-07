<template>
  <v-row>
    <v-col cols="12" class="primary d-flex justify-center">
      <h1 v-text="viewTitle" class="white--text mt-3" />
    </v-col>
    <v-col cols="12" class="d-flex justify-center">
      <div class="text-center">
        <v-card
          width="350"
          height="350"
          class="rounded-circle d-flex flex-row justify-center align-center mt-12 mb-15"
        >
          <h1
            v-text="itemsDataGestion.length"
            class="primary--text display-3"
          />
        </v-card>

        <Button label="Gestionar" :action="manage" />
        <!-- <Button label="Cancelar" :outlined="true" :action="cancel" /> -->
      </div>
    </v-col>
    <!-- <v-col cols="4"> </v-col> -->
    <Dialog />
    <!-- <v-col cols="8">
      <Form />
    </v-col> -->
  </v-row>
</template>
<script>
import { RecievedController } from "~/controllers/gtc/recieved.controller";
import { Sweetalert } from "~/assets/sweetalert";

export default {
  layout: "empty",
  middleware: "auth",

  data() {
    return {
      viewTitle: "Gestion base de datos",
      items: [],
    };
  },
  async fetch() {
    const data = await this.getRecievedBase();
    this.items = data.rows;
  },
  methods: {
    getRecievedBase: RecievedController.get.recievedbase,
    putRecievedBase: RecievedController.put.recievedbase,

    manage() {
      const register = this.itemsDataGestion[this.itemsDataGestion.length - 1];
      if (register) {
        console.log(
          "🚀 ~ file: management.vue ~ line 55 ~ manage ~ register",
          register
        );
        const { cuenta, periodo, notas_gtc } = register;
        const dataGestion = { cuenta, periodo, notas_gtc };
        for (const key in dataGestion) {
          $nuxt.$store.dispatch("app/actUpdateValue", {
            key: key,
            value: dataGestion[key],
          });
        }
        this.putRecievedBase(register);
        $nuxt.$router.push({ name: "managementForm" });
      } else {
        Sweetalert.alert({
          icon: "warning",
          title: "Ups!",
          text: "No hay gestiones disponibles",
          timer: 1500,
          showConfirmButton: false,
        });
      }
    },
    cancel() {
      console.log("Cancelar");
    },
  },
  computed: {
    itemsDataGestion() {
      return this.items.filter((v) => v.is_active === false);
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
