<template>
  <v-form @submit.prevent="sendform" v-model="isFormValid">
    <v-row>
      <v-col cols="12">
        <Input label="Usuario" :rules="rules.user" :model.sync="user" />
      </v-col>
      <v-col cols="12">
        <Input label="Contraseña" :rules="rules.password" type="password" />
      </v-col>
      <v-col cols="12" class="d-flex justify-center">
        <Button label="Ingresar" :disabled="!isFormValid" type="submit" />
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  data() {
    return {
      isFormValid: true,
      rules: {
        user: [
          (v) => !!v || "El campo Usuario es requerido",
          (v) => /^[a-zñ]+$/.test(v) || "Solo se acepta letras",
        ],
        password: [(v) => !!v || "El campo Contraseña es requerido"],
      },
      user: "",
    };
  },
  methods: {
    sendform() {
      $nuxt.$router.push({ name: "management" });
    },
  },
  watch: {
    user(val) {
      this.$nextTick(() => {
        this.user = isNaN(val) ? val : null;
      });
      console.log(val);
    },
  },
};
</script>

<style></style>
