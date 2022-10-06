export const SubmitController = {
  post: {
    gestion: async (payload) => {
      const { data } = await $nuxt.$api.post("bases/enviar/", payload);
      console.log(data);

      //   if (data.token) {
      //     $nuxt.$store.dispatch("localStorage/actUpdateValue", {
      //       key: "token",
      //       value: data.token,
      //     });
      //     $nuxt.$store.dispatch("localStorage/actUpdateValue", {
      //       key: "username",
      //       value: data.username,
      //     });
      //     $nuxt.$router.push({ name: "management" });
      //   }
    },
  },
};
