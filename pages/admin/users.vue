<template>
  <v-row>
    <v-col cols="12" class="primary d-flex justify-center">
      <h1 v-text="viewTitle" class="white--text mt-3" />
      <v-btn
        class="ma-2 mt-4 white"
        color="primary"
        outlined
        rounded
        @click="logout"
        style="position: absolute; right: 0"
      >
        Cerrar sesion
        <v-icon right> mdi-exit-run </v-icon>
      </v-btn>
    </v-col>
    <v-col cols="12">
      <v-row class="mx-5 mt-3">
        <v-col v-for="u in 20" cols="3" :key="u" class="mb-5">
          <v-card
            min-height="200px"
            rounded="xl"
            style="box-shadow: 0px 2px 2px 0px rgb(17 120 100)"
          >
            <v-row class="pa-5">
              <!-- Nombre -->
              <v-col cols="12" class="text-center">
                <span class="primary--text">Nombre</span> <br />
                <span>Pedro</span>
              </v-col>
              <!-- Apellido -->
              <v-col cols="12" class="text-center">
                <span class="primary--text">Apellido</span> <br />
                <span>Jimenez</span>
              </v-col>
              <!-- Campaña -->
              <v-col cols="12" class="text-center">
                <span class="primary--text">Campaña</span> <br />
                <!-- <span>Segundo Anillo</span> -->
                <v-chip class="ma-2" color="primary">
                  <v-icon left class="mb-1"> mdi-hoop-house </v-icon>
                  Segundo Anillo
                </v-chip>
              </v-col>
              <!-- Correo -->
              <v-col cols="12" class="text-center">
                <span class="primary--text">Correo</span> <br />
                <span>pedrojimenez@uno27.co</span>
              </v-col>
              <!-- Nombre del usuario -->
              <v-col cols="12" class="text-center">
                <span class="primary--text">Nombre del usuario</span> <br />
                <span>pjimenez</span>
              </v-col>
              <!-- Rol -->
              <v-col cols="12" class="text-center">
                <span class="primary--text">Rol</span> <br />
                <!-- <span>Admin</span> -->
                <v-chip class="ma-2" color="primary">
                  <v-icon left> mdi-shield-account </v-icon>
                  Admin
                </v-chip>
              </v-col>
            </v-row>
          </v-card></v-col
        >
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from "vuex";
import { LoginController } from "~/controllers/login.controller";

export default {
  layout: "empty",
  middleware: "auth",

  data() {
    return {
      viewTitle: "Usuarios",
    };
  },

  computed: {
    ...mapState("localStorage", ["token", "username"]),
  },

  methods: {
    postLogout: LoginController.post.logout,

    logout() {
      this.postLogout(this.token);
    },
  },
};
</script>

<style></style>
