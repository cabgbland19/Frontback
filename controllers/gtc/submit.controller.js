import { Sweetalert } from "~/assets/sweetalert";

export const SubmitController = {
  post: {
    gestion: async (payload) => {
      const { data } = await $nuxt.$api.post("bases/enviar/", payload);

      if (data) {
        Sweetalert.alert({
          title: "Excelente!",
          text: "Registro Gestionado",
          timer: 1500,
        });
        $nuxt.$router.push({ name: "management" });
      }
    },
  },
};
