<template>
  <v-form ref="form" @submit.prevent="sendform" v-model="isFormValid">
    <v-row dense>
      <!-- Nombre -->
      <v-col cols="12">
        <Input label="Nombres" :rules="rules.name" :model.sync="userItemName" />
      </v-col>
      <!-- Apellidos -->
      <v-col cols="12"
        ><Input
          label="Apellidos"
          :rules="rules.lastName"
          :model.sync="userItemLastName"
      /></v-col>
      <!-- Campaña -->
      <v-col cols="12"
        ><Select
          label="Campaña"
          :items="itemsSelectCampaign"
          :rules="rules.campaign"
          :model.sync="userItemCostCenter"
      /></v-col>
      <!-- Correo -->
      <v-col cols="12">
        <Input
          label="Correo"
          :rules="rules.email"
          :model.sync="userItemEmail"
        />
      </v-col>
      <!-- Rol -->
      <v-col cols="12"
        ><Select
          label="Rol"
          :items="itemsSelectRol"
          :rules="rules.rol"
          :model.sync="userItemRol"
      /></v-col>
      <!-- Contraseña -->
      <v-col cols="12">
        <Input
          label="Contraseña"
          :model.sync="userItemPassword"
          type="password"
        />
      </v-col>
      <!-- action -->
      <v-col cols="12" class="d-flex justify-end">
        <Button label="Cancelar" outlined :action="cancelAction" />
        <Button
          label="Editar"
          class="ml-4"
          type="submit"
          :disabled="!isFormValid"
        />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
import Regex from "~/plugins/regex.js";
import Select from "../Select.vue";
import { VModelUserInterface } from "~/interfaces/user.interface";
import { propertiesGenerator } from "~/plugins/helpers";
import { UsersController } from "~/controllers/user.controller";

export default {
  components: { Select },
  data() {
    return {
      isFormValid: true,
      rules: {
        name: [
          (v) => !!v || "El nombre es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        lastName: [
          (v) => !!v || "El apellido es requerido",
          (v) => Regex.onlyLetters.test(v) || "Solo se aceptan letras",
        ],
        campaign: [(v) => !!v || "La campaña es requerida"],
        email: [
          (v) => !!v || "El correo es requerido",
          (v) => Regex.onlyEmail.test(v) || "Correo invalido",
        ],
        // userName: [(v) => !!v || "El campo cuenta es requerido"],
        rol: [(v) => !!v || "El rol es requerido"],
      },
      itemsSelectRol: [
        {
          text: "ADMINISTRADOR",
          value: 1,
        },
        {
          text: "BACKOFFICE GTC",
          value: 2,
        },
      ],
      itemsSelectCampaign: [
        {
          text: "SEGUNDO ANILLO",
          value: 160,
        },
        {
          text: "TERCER ANILLO",
          value: 162,
        },
      ],
    };
  },

  methods: {
    putUser: UsersController.put.user,

    cancelAction() {
      $nuxt.$emit("changeDialog", false);
      // this.$refs.form.reset();
    },
    sendform() {
      this.putUser(this.userItem);
    },
  },

  updated() {
    $nuxt.$on("userInfo", (val) => {
      this.model = val;
    });
  },

  computed: {
    ...propertiesGenerator([...VModelUserInterface], {
      path: "user.store",
      mut: "user.store/setProperty",
    }),
  },
};
</script>

<style></style>
